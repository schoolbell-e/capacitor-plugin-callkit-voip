package com.schoolbelle.capacitor.callkitvoip;

import com.getcapacitor.Bridge;
import com.getcapacitor.JSObject;
import com.getcapacitor.Logger;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginHandle;
import com.getcapacitor.PluginMethod;


import android.content.Context;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;

public class CallKitVoipPlugin extends Plugin {
    public  static  Bridge                      staticBridge = null;


    @Override
    public void load(){
        staticBridge   = this.bridge;


        this.getActivity().getApplicationContext();

    }

    @PluginMethod
    public void register(PluginCall call) {
        Log.d("CallKitVoip","register");
        call.resolve();
    }
    public void notifyEvent(String eventName, String username, String connectionId){
        Log.d("notifyEvent",eventName + "  " + username + "   " + connectionId);

//        JSObject data = new JSObject();
//        data.put("username",        username);
//        data.put("connectionId",    connectionId);
//        notifyListeners("callAnswered", data);
    }



    public static CallKitVoipPlugin getInstance() {
        if (staticBridge == null || staticBridge.getWebView() == null)
            return  null;

        PluginHandle handler = staticBridge.getPlugin("CallKitVoip");

        return handler == null
                ? null
                : (CallKitVoipPlugin) handler.getInstance();
    }

}
