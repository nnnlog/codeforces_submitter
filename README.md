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
* **You must keep your session value securely**

## Usage
```
node PATH/index.js <Source Code Path> <Contest> <Problem>
```

#### Example

```
node ~/codeforces_submitter/ ./main.cpp 1000 A
```

## More
* clone repository to `~/codeforces_submitter/`
* `sudo cp ~/codeforces_submitter/tools/cf_submit /usr/local/bin`
* Then, you can submit code with `cf_submit` command.
* For example, `cf_submit ./main.cpp 1000 A`

## TODO
* Create setting to manage compiler type.
* get the current contest link automatically.

## Warning
* I do not deny there is no attempt to access the Codeforces server through a technical bypass. (such as obfuscated get_tta)
* **Under the MIT license, the user is responsible for everything.**

#### Korean (한국어)
* 기술적 우회을 통하여 코드포스 서버에 접속하려는 시도가 없다는 것을 부인하지 않습니다. (난독화된 get_tta와 같은)
* **MIT 라이선스에 따라서 모든 책임은 사용자에게 있습니다.**

## LICENSE
* MIT