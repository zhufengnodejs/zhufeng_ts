declare namespace jQuery{
    function ajax(url:string,settings:any):void;
    namespace fn {
        function extend(object:any):void;
    }
}
jQuery.ajax('/api/users',{});
jQuery.fn.extend({
    log:function(message:any){
        console.log(message);
    }
});
export {};
