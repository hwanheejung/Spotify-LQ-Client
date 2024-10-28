import LoginBtn from '../Button/LoginBtn'

const LoginBanner = () => {
  return (
    <div className="flex justify-between bg-gradient-to-r from-[#AA309B] to-[#519AF4] px-5 py-3">
      <div>
        <h3 className="font-bold">Preview</h3>
        <p>
          Log in to enjoy all features of the app. Spotify playback requires an
          active Spotify Premium subscription.
        </p>
      </div>
      <LoginBtn />
    </div>
  )
}

export default LoginBanner
