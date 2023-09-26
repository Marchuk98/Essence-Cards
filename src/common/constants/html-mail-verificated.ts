export const htmlCodeVerificationMail = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">

<head>
</head>

<body style="width:100%;height:100%;padding:0;Margin:0">
    <div class="es-wrapper-color" style="background-color:#EFEFEF">
        <table width="650" style="font-family: Helvetica, Arial, sans-serif; background: #fff; margin: 0 auto;">
            <tr>
                <td style="padding-top: 20px; padding-bottom: 20px;">
                    <p align="center" style="Margin:0;padding-top:10px;padding-bottom:10px;font-size:0">
                        <img src="https://yt3.ggpht.com/a/AATXAJxElPEHE4v4RSr9LuZTF77mKCThDeXtKUc7fA=s900-c-k-c0xffffffff-no-rj-mo" alt="" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none;border-radius:0" width="100" height="100">
                    </p>
                </td>
            </tr>
        </table>

        <table width="650" style="font-family: Helvetica, Arial, sans-serif; background: #fff; margin: 0 auto; border-top: 1px solid #ddd; border-bottom: 1px solid #ddd;">
            <tr>
                <td style="padding-top: 40px; padding-bottom: 40px; padding-left: 10px; padding-right: 10px; text-align: center;">
                    <h1 style="font-size: 40px; font-weight: 100; margin-bottom: 20px; color: #6759fb;">Verify your email address</h1>
                    <p style="font-size: 20px; margin-bottom: 30px; line-height: 26px;">In order to start using your Essence Cards account, you need to confirm your email address.<br> Click the button below to verify your email and continue working.</p>
                    <a href="http://localhost:3000/confirm-email/##token##" style="margin-bottom: 30px; display: inline-block; background: #6759fb; color: #fff; text-decoration: none; padding: 20px 30px; border-radius: 10px; font-size: 20px;">Verify email address</a>
                    <p style="color: #777777;">Essence cards is currently only supported on desktops.</p>
                </td>
            </tr>
        </table>

        <table width="650" style="font-family: Helvetica, Arial, sans-serif; background: #fff; margin: 0 auto;">
            <tr>
                <td style="padding-top: 40px; padding-bottom: 40px; padding-left: 10px; padding-right: 10px; text-align: center;">
                    <p style="color: #777777; line-height: 20px;">You received this email because you signed up for a Essence cards account with this email address. If this was a mistake, ignore this email.</p>
                </td>
            </tr>
        </table>
    </div>
</body>

</html>`;