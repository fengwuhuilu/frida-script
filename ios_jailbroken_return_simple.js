//frida.exe -U -f com.pingan.aikephone -l ios_jailbroken_return_simple.js --no-pause
console.log("[*] Started: Find All Methods of a Specific Class");

if (ObjC.available)

{

			
			
   var className3 = "BKAConfig";
			var funcName3 = "+ deviceISJailbroken"

			var hook3 = eval('ObjC.classes.' + className3 + '["' + funcName3 + '"]');

			Interceptor.attach(hook3.implementation, {

			  onLeave: function(retval) {

				console.log("[*] Class Name1: " + className3);

				console.log("[*] Method Name1: " + funcName3);

				console.log("\t[-] Type of return value1: " + typeof retval);

				console.log("\t[-] Original Return Value1: " + retval);

				

				retval.replace(ptr(0x0));

				console.log("\t[-] New Return Value1: " + retval)

			  }

			});

  //BKAConfig
  //+ deviceISJailbroken
  

}
   