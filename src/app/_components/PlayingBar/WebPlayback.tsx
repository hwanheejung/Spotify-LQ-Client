/* eslint-disable @typescript-eslint/no-unused-expressions */

'use client'

import { usePlaybackStore } from '@/lib/stores/playback.store'
import { useEffect } from 'react'
import CurrentTrack from './CurrentTrack'
import Player from './Player'
import SidebarNav from './SidebarNav'

const WebPlayback = ({ token }: { token: string }) => {
  const { setPlayer, setCurrentTrack, setIsPaused, setIsActive } =
    usePlaybackStore()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://sdk.scdn.co/spotify-player.js'
    script.async = true
    document.body.appendChild(script)

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: (cb) => {
          cb(token)
        },
        volume: 0.5,
      })

      setPlayer(player)

      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id)
      })
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id)
      })

      player.addListener('player_state_changed', (state) => {
        if (!state) return

        setCurrentTrack(state.track_window.current_track)
        setIsPaused(state.paused)

        player.getCurrentState().then((state) => {
          !state ? setIsActive(false) : setIsActive(true)
        })
      })
      player.connect()
    }
  }, [])

  return (
    <div className="flex w-full items-center justify-between px-5 py-3">
      <CurrentTrack />
      <Player />
      <SidebarNav />
    </div>
  )
}

export default WebPlayback
