export function createWelcomeEmailTemplate(name, profileUrl) {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to CareerHive</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .logo {
        width: 250px;
        height: 250px;
      }
      @media (min-width: 768px) {
        .logo {
          width: 500px;
          height: 500px;
        }
      }
    </style>
  </head>
  <body>
    <div
      style="
        width: 100%;
        background-color: #f0f0f0;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 45px;
      "
    >
      <img src="https://res.cloudinary.com/dqv93ab4n/image/upload/v1734234382/CareerHive_kyjzhf.svg" alt="Career Hive Logo" class="logo" />
      <h1
        style="
          font-family: sans-serif;
          text-align: center;
          padding: 0 10px 0 10px;
        "
      >
        Welcome to Career Hive!
      </h1>
    </div>
    <div style="width: 100%; display: flex; justify-content: center">
      <div
        style="
          margin-left: 30px;
          margin-right: 30px;
          margin-top: 40px;
          font-family: sans-serif;
          max-width: 678px;
        "
      >
        <h2 style="color: #efb428">Hello ${name},</h2>
        <p style="padding-top: 20px; line-height: 21px">
          We are thrilled to have you join our professional community!
          CareerHive is your platform to connect, learn, and grow in your
          career.
        </p>
        <div
          style="
            background-color: rgba(202, 191, 191, 0.597);
            width: 100%;
            height: auto;
            padding: 30px;
            margin-top: 20px;
            border-radius: 10px;
          "
        >
          <p style="margin-bottom: 9px">Here is how to get started:</p>
          <ul
            style="
              list-style-type: none;
              display: flex;
              flex-direction: column;
              gap: 6px;
            "
          >
            <li>• Complete your profile</li>
            <li>• Connect with colleagues or friends</li>
            <li>• Join groups relevant to your interests</li>
            <li>• Explore job opportunities</li>
          </ul>
        </div>
        <div
          style="
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 20px;
            margin-bottom: 20px;
          "
        >
          <button
            style="
              background-color: #efb428;
              color: black;
              padding: 16px 24px 16px 24px;
              border-radius: 20px;
              border: none;
              font-size: 18px;
              cursor: pointer;
            "
          >
          <a href=${profileUrl}>Complete Your Profile</a>
          </button>
        </div>
        <p style="margin-bottom: 15px">
          If you have any questions or need assistance, or support team is
          always here to help.
        </p>
        <div style="display: flex; flex-direction: column; gap: 2px">
          <span>Best regards,</span>
          <span>The CareerHive Team</span>
        </div>
      </div>
    </div>
  </body>
</html>
    `;
}
