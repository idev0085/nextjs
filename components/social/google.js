import React from 'react';
import Image from 'next/image'
import GoogleLogin from 'react-google-login';
const responseGoogle = (response) => {
    console.log(response);
    console.log(response.tokenId);
    var res = response.profileObj;
    console.log(res);
}

const GoogleButton = () => {
    return (
        <GoogleLogin
            clientId={process.env.GOOLGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            render={renderProps => (
                <div onClick={renderProps.onClick} className='pointer margin20'>
                    <Image
                        src="/images/google.png" // Route of the image file
                        height={144} // Desired size with correct aspect ratio
                        width={144} // Desired size with correct aspect ratio
                        alt="google-icon"
                    />
                </div>
            )}
        />
    )
}

export default GoogleButton






