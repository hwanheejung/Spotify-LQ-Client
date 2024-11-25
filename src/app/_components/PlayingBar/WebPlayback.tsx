/* eslint-disable @typescript-eslint/no-unused-expressions */

'use client'

import { usePlaybackStore } from '@/lib/stores/playback.store'
import { useEffect } from 'react'
import CurrentTrack from './CurrentTrack'
import Player from './Player'
import SidebarNav from './SidebarNav'

const WebPlayback = ({ token }: { token: string }) => {
  const { setPlayer, playerName, setCurrentTrack, setIsPaused, setIsActive } =
    usePlaybackStore()

  const handlePlayerReady = ({ device_id }: { device_id: string }) => {
    console.log('Ready with Device ID', device_id)
  }

  const handlePlayerNotReady = ({ device_id }: { device_id: string }) => {
    console.log('Device ID has gone offline', device_id)
  }

  const handlePlayerStateChange = (
    player: Spotify.Player,
    state: Spotify.PlaybackState | null,
  ) => {
    if (!state) return

    setCurrentTrack(state.track_window.current_track)
    setIsPaused(state.paused)

    player.getCurrentState().then((state) => {
      if (!state) {
        console.error(`User is not playing music through the [${playerName}]`)
        setIsActive(false)
        return
      }

      setIsActive(true)
    })
  }

  const connectPlayer = (player: Spotify.Player) => {
    player.connect().then((success) => {
      if (success)
        console.log(
          `The Web Playback SDK [${playerName}] successfully connected to Spotify!`,
        )
    })
  }

  const addPlayerListeners = (player: Spotify.Player) => {
    player.addListener('ready', handlePlayerReady)
    player.addListener('not_ready', handlePlayerNotReady)
    player.addListener('player_state_changed', (state) =>
      handlePlayerStateChange(player, state),
    )
  }

  const setupSpotifyPlayer = (token: string) => {
    const player = new window.Spotify.Player({
      name: playerName,
      getOAuthToken: (cb) => cb(token),
      volume: 0.5,
    })

    setPlayer(player)

    addPlayerListeners(player)
    connectPlayer(player)
  }

  const initializeSpotifySDK = () => {
    const script = document.createElement('script')
    script.src = 'https://sdk.scdn.co/spotify-player.js'
    script.async = true
    document.body.appendChild(script)
    window.onSpotifyWebPlaybackSDKReady = () => setupSpotifyPlayer(token)
  }

  useEffect(() => {
    initializeSpotifySDK()
  }, [])

  return (
    <div className="grid w-full grid-cols-3 px-5 py-3">
      <CurrentTrack />
      <Player />
      <SidebarNav />
    </div>
  )
}

export default WebPlayback
