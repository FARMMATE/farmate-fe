package com.ifwinfirstplace.farmate

import android.webkit.WebChromeClient
import android.webkit.WebViewClient
import java.io.File

interface PageChangeListener {
    fun changePage(page: Page, checked: Boolean = false)
    fun finishApp()
    fun getWebViewClient(): WebChromeClient
}

enum class Page {
    LOGIN, HOME, DETAIL, CONTACT, MY, SEARCH
}