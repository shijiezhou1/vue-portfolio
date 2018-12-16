Options / Lifecycle Hooks
```
let vue = new Vue({
 el: '#app',
 data: {
 title: 'This VueJS Instance'
 },
 methods: {
 destroy: function() {
 this.$destroy();
 }
 },
 beforeCreate() {
 console.log('beforeCreated()');
 },
 created() {
 console.log('created()');
 },
 beforemount() {
 console.log('beforemount()');
 },
 mounted() {
 console.log('mounted()');
 },
 beforeUpdate() {
 console.log('beforeUpdate()');
 },
 updated() {
 console.log('updated()');
 },
 beforeDestroy() {
 console.log('beforeDestroy()');
 },
 destroy() {
 console.log('destroy()');
 }
});
```