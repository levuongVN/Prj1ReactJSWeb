import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import ImgSignup from "./ImageLogin.png";
import "./Style.css";
import { FormControl, Select, MenuItem } from "@mui/material";

export default function LoginComponent() {
  const [Languages, setLanguages] = React.useState('English');
  const { t, i18n } = useTranslation();

  const socialIcons = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="social-svg">
          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
        </svg>
      ),
      label: 'Google'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
          <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
        </svg>
      ),
      label: 'GitHub'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="social-svg">
          <path fill="#1877F2" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z" />
          <path fill="#ffffff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z" />
        </svg>
      ),
      label: 'Facebook'
    }
  ];

  const handleChange = (e) => {
    setLanguages(e.target.value)
    i18n.changeLanguage(e.target.value === "English" ? "en" : "vi")
  }

  return (
    <div className="SignUp-wrapper d-flex justify-content-center align-items-center">
      <div className="Container">
        <div className="background-container">
          {[1, 2, 3].map(num => (
            <div key={num} className={`Layer${num}`}></div>
          ))}
        </div>

        <div className="login-content">
          <div className="row h-100 g-0">
            {/* Left Side */}
            <div className="col-12 col-md-6 d-flex flex-column justify-content-between LeftSide">
            <h1 className="title display-4">Study<br />the<br />word</h1>
            <div className="image-container">
                <img src={ImgSignup} alt="Login" className="img-fluid" />
              </div>
              <p className="JoinText d-md-block">{t('Join us!')}</p>
            </div>

            {/* Right Side */}
            <div className="col-12 col-md-6 p-4 Bg-Form">
              <div className="d-flex justify-content-end">
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: "max-content",marginTop:"-1rem" }} className="col-12">
                  <Select
                    value={Languages}
                    onChange={handleChange}
                    label="Languages"
                  >
                    <MenuItem value={'English'}>English</MenuItem>
                    <MenuItem value={'Vietnamese'}>Vietnamese</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <form className="login-form text-center h-100 d-flex flex-column justify-content-center">
                <h2 className="mb-4">{t('Welcome')}</h2>
                <h2 className="TitleWelcome mb-4">{t('Welcome back')}</h2>

                {['Email', 'Password'].map((placeholder, index) => (
                  <div key={index} className="form-group mb-3">
                    <input
                      type={index === 1 ? 'password' : 'email'}
                      className="form-control"
                      placeholder={t(placeholder)}
                    />
                  </div>
                ))}

                <button type="submit" className="btn btn-primary w-100 mb-3">
                  {t('Sign in')}
                </button>

                <div className="form-group mb-3">
                  <small className="TextSignIn">
                    {t("Don't have an account?")}
                    <Link to={'/SignUp/user'} className="ms-2 LinkSignIn">
                      {t('Sign up')}
                    </Link>
                  </small>
                </div>

                <div className="form-group mb-3">
                  <p className="TextOr">-{t('or')}-</p>
                </div>

                <div className="form-group social-login">
                  {socialIcons.map((item, index) => (
                    <Link key={index} to={''} className="social-icon" aria-label={item.label}>
                      {item.icon}
                    </Link>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
