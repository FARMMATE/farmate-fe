package com.ifwinfirstplace.farmate.view.login

import android.app.Activity
import android.util.Log
import android.webkit.JavascriptInterface
import androidx.navigation.NavController
import androidx.navigation.NavOptions
import com.ifwinfirstplace.farmate.Page
import com.ifwinfirstplace.farmate.PageChangeListener
import com.ifwinfirstplace.farmate.R

class LoginInterface(private val navController: NavController) {

    @JavascriptInterface
    fun checkLogin(id: String, pw: String) {
        navController.navigate(R.id.action_loginFragment_to_homeFragment)
    }
}