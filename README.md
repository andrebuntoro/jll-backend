# API Documentation

---

## Setup

- install npm modules.

```bash
npm install
```

- setup firebase init

  - get your web api key [here](https://console.firebase.google.com/project/jll-service/settings/general) for `firebaseInit.ts`
  - get your privateKey.json [here](https://console.firebase.google.com/project/jll-service/settings/serviceaccounts/adminsdk) for `firebaseAdminInit.ts`

    - setup env variable (mac)

    ```bash
    export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"
    ```

    - setup env variable (windows)

    ```powershell
    $env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\username\Downloads\service-account-file.json"
    ```

## Start Server

```bash
npm start
```
