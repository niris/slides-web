![](https://i.imgur.com/EKPtgdk.png)
---
# What old website was like
![](https://i.imgur.com/qCRpR5n.png)

---
# What modern website look like
![](https://i.imgur.com/BEyndbb.png)
---
# imgur.com exemple
- Expectation: serve 1 image (43KB)
- Reality: 17.6MB/123 files
![](https://i.imgur.com/hfYBBlz.png)
[Source: Twitter](https://twitter.com/csswizardry/status/1185604806901207045?lang=en)
---

# Back in the 90'
- not much user => mostly geeks
- not much databases => Plain file/MySQL/PostgreSQL
- not much framework => mostly handmade
- not much traffic => DB + CGI + assets on the same server

```sql
SELECT * FROM user WHERE id=$GET['id']
```

- no security => HTTP, SQL injection, public port...
- no interactivity (who care ¯\\＿(ツ)＿/¯ )
- Browser war (Microsoft fuck up the standard)

---

# What append in 2005
- Growing internet population  
  [17% 1998 => 81% 2018][intpop] (dev world)  
  **=> More user and traffic**
- iphone (2007) starts smartphone trends  
  [6% 2007 => 81% 2017][smartpop] (US)  
  **=> Mobile first + App style UX is the norm**
- New services (Social, Streaming...)  
	Facebook:2004, Twitter:2006, YouTube:2005  
	**=> Companies need standard (HTML5, H264)**

## What could go wrong ...

<!--![](https://i.imgur.com/bEkVcTq.jpg)-->

[intpop]: https://en.wikipedia.org/wiki/Global_Internet_usage#Internet_users
[smartpop]: https://www.comscore.com/Insights/Blog/US-Smartphone-Penetration-Surpassed-80-Percent-in-2016

---

# New challenges arise

- More traffic
	- Need clustering, Load balancing, CDN ...
	- Database parallelization/redundancy
- More services
	- Security is now a must (DAO, salt, HTTPS)
	- Some don't want to handle hardware (Cloud, PAAS...)
	- Larger/complex services (many entities ...) need typing
	- Reuse code/pattern => frameworks appear
- User expect App-like experience
	- KISS over fonctionalities
	- Seamless navigation (no loading)
	- More interactiv (XHR + DOM update)
	- Transition, Audio, video, geo, 3D ...

---

# What's new in 2015+
- New jobs/fields (Community Manager, Security, Infra, ...)
- New Technologies (NoSQL, ES6, TS)
- New Libraries/Framework (Angular, Laravel, ...)
- New standards (fetch, querySelector, ES6)  
- Legacy increase (PHP5, Jquery...)

### What's good👍/bad👎 for the web devs ...
---

# 👎 Web want to be an native app
- Data Fetching (animation + transition + async)
- Pre-load **all pages** and handle their **routing**
- A lot of new code (but JS/CSS don't scale)
  - Need compat, modularity, bundling, typing...
  - None are standard, so **new tools/libs** appeared:  
  TS, webpack, gulp, bower, grunt, npm, babel, etc.
- "I heard Angular was good"
  - Install VSCode + NodeJS + NPM + 950MB deps + cli
  - Blindly copy-past *outdated* tutorial (WebPack3, Ng2)
  - You **can't** understand what you are doing

Let's hope those **tools** will be standardized (obsolete).
Meanwhile, TS/JSX depend on those build tools
---

# 👍 Cleaner and powerful API
- Web engine unifying : Gecko/Webkit (safari = new IE)
- Standard includes common techniques from past years  
	=> HTML: video, input[pattern,autocomp,type=time]  
	=> CSS: border-radius, variable, gradient, animation  
	=> JS: **import**, websocket, async, let/const  
	=> API: fetch, querySelector, websocket, History  
- Better front/back separation:
  - Backend: handle client (iOS, Android, web) request  
    => most popular = HTTPS + REST + JSON
  - Frontend: SinglePageApp (Angular/React/Vue/...)  
    => Client do the routing + page display

---

# Front/Back stack examples
```
┌────────────────────────────┐
│TV │ iOS │ Android │ Web ...│
└────────────────────────────┘
        │               │
  JSON  │        static │
REST API│        files  │
        │               │
┌[api.site.fr]┐┌[www.site.fr]┐
│php/py/rb/jar││    NGINX    │
├─────────────┤│ - vue.js    │
│    mySQL    ││ - index.html│
└─────────────┘└─────────────┘
```
- `curl api.deezer.com/artist/eminem | jq`
- `curl https://api.github.com/users/yne`

---

# Popular Front-end technos

[![](https://i.imgur.com/qYgz7S6.png)](https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190)
- Want to learn [Angular](https://github.com/angular/angular) (766K) ? need TS (+ npm + ...) 😢
- Want to learn [React](https://github.com/facebook/react ) (133K) ? need JSX (+ npm + ...) 😢
- Want to learn [Vue](https://github.com/vuejs/vue) (58K) ? **don't need anything !** 😄

---

# LiveCoding: Vue

**Component** based **Library** that **sync** `view ⇄ data`

- **Library**: 1 job, no constraint. want more ? import them.
- **Sync**: Writing in an `<input>` will update the data + fetch-ed JSON will automatically update the view
- **Component**: `<g-map lng=3.34 lat=8.74 />`
![](https://i.imgur.com/7XjvVxJ.png)
---
# Vue component overview

```html
┌─────┐     ┌─────┐
│  ┌──┘     └──┐  │
│┌─│props:['p']│  │
││ └───────────┘  │
│└▶computed:{c}   │
│┌▶data:()=>{d}   │
│└─methods :{m}   │
│  watch │ :{w}   │
└─────┐│ │  ┌─────┘
   ┌──┘▼ ▼  └──┐
   │$emit('ev')│
   └───────────┘
<my-comp p=text v-on:ev=alert></my-comp>
```
---

# Vue component overview

```html
┌─────┐     ┌────────────────────────┐
│  ┌──┘     └──┐ el/template:`       │
│┌─│props:['p']│─┐  <input           │
││ └───────────┘ └▶  v-bind:type=p   │
│└▶computed:{c} ──▶  v-bind:size=c   │
│┌▶data:()=>{d} ◀─▶  v-model:value=d │
│└─methods :{m} ◀──  v-on:click=m    │
│  watch │ :{w}     ></input>`       │
└─────┐│ │  ┌────────────────────────┘
   ┌──┘▼ ▼  └──┐
   │$emit('ev')│
   └───────────┘
<my-comp p=text v-on:ev=alert></my-comp>
```

---

# Example 0: Basic dependency

```javascript
let MyFooter = {template:`<b>bye</b>`}
let SayHello = {
	props:['prefix'],
	data(){return {user:'tom'}},
	template:`<p>Hi {{prefix}} {{user}}
		<input v-model:value=user>
		<MyFooter/> <my-footer/> </p>`,
	components: {MyFooter},
}
```
```html
<say-hello prefix=Mr></say-hello>
```
<main id=ex0>
<say-hello prefix=Mr></say-hello>
</main>
---

# Data binding Example

```js
TripleInput = {
 data(){return {demo:"init"}},
 template:`<span>Triple:
   <input v-for="i in 3"
     v-bind:size=i
     v-model:value=demo>
 </span>`}
```
```html
	<triple-input></triple-input>
	<triple-input></triple-input>
```
<main id=ex1>
	<triple-input></triple-input>
	<triple-input></triple-input>
</main>

---

```html
<!DOCTYPE html>
<script src="//unpkg.com/vue"></script>
<main>
 <my-header></my-header>
 hello {{user}}
 <my-footer></my-footer>
</main>
<script>
MyHeader = {template:`<h1>Welcome</h1>`}
MyFooter = {template:`<pre>bye</pre>`}
new Vue({
  el: 'main',
  data: () => ({user:'tom'})
  components: {MyHeader, MyFooter},
})
</script>
```

---

# Demo: SPA (HTML part)

```html
<!DOCTYPE html> <!-- Page Example -->
<script src="//unpkg.com/vue"></script>
<script src="//unpkg.com/vue-router"></script>
<main>
 <nav class="tabs is-full">
  <a is=router-link :to="'/'">Home</a>
  <a is=router-link :to="'user'">User</a>
  <a is=router-link :to="'xxx'">xxx</a>
 </nav>
 <router-view />
</main>

```

---

# Demo: SPA (JS part)
Create 3 routed Components, and start Vue

```js
HomePage={template:`<h1>Welcome !</h1>`}
UserPage={template:`<b>User info:</b>`}
E404Page={template:`<pre>Woups</pre>`}

let routes = [
  { path: '/',     component: HomePage},
  { path: '/user', component: UserPage},
  { path: '*',     component: E404Page},
]; // mode = "history"
let router = new VueRouter({routes})
new Vue( {el: 'main', router})
```

---

# Split our components (JSM):

```html
<script type=module>
import HomePage from "/HomePage.js";
...
</script>
```

`HomePage.js`:
```js
export default {
	template:`<h1>Welcome</h1>`
}
```
---

# Conclusion

- You can learn modern web development without learning TS / npm / webpack ...

- The web is now more complex & powerful, but you can **Keep It Simple**.

# Questions ?  

---

# Bonus: Frontend Differences

- [VAR Benchmarks](https://stefankrause.net/js-frameworks-benchmark8/table.html)
- [V/R Differences](https://medium.com/javascript-in-plain-english/-e9a1ae8077fd)

