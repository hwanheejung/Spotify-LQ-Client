'use client'

const Profile = ({ logout }: { logout: () => Promise<void> }) => {
  return (
    <>
      <button onClick={logout}>Logout</button>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-spotifyGreen/30 p-1.5">
        <div className="h-full w-full rounded-full bg-spotifyGreen" />
      </div>
    </>
  )
}

export default Profile
