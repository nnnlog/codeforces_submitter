# Codeforces Submitter
* Submit Codeforces code with CLI environment

## Installation
```
git clone https://github.com/nnnlog/codeforces_submitter
cd codeforces_submitter
npm i
```
## Setting
* Create `codeforces_submitter/session` and write your `JSESSIONID`.
### How can I get `JSESSIONID`?
* Go Codeforces.
* Open Console (with F12) and select `Application` from top bar.
* Click `Cookies` -> `https://codeforces.com`.
* There is `JSESSIONID`'s value.
* *You must keep your session value securely*

## Usage
```
node index.js ./main.cpp 1000 A
```

## TODO
* Create setting to manage compiler type.
* get the current contest link automatically.

## LICENSE
* MIT