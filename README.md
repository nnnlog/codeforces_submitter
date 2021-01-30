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
* ![Description](https://raw.githubusercontent.com/nnnlog/codeforces_submitter/master/docs/capture.PNG)
* *You must keep your session value securely*

## Usage
```
node PATH/index.js <Source Code Path> <Contest> <Problem>
```

* Example

```
Example: node ~/codeforces_submitter/ ./main.cpp 1000 A
```

## More
* clone repository to `~/`
* `sudo cp ~/tools/cf_submit /usr/local/bin`
* Then, you can submit code with `cf_submit` command.
* For example, `cf_submit ./main.cpp 1000 A`

## TODO
* Create setting to manage compiler type.
* get the current contest link automatically.

## LICENSE
* MIT