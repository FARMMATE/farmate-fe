package com.ifwinfirstplace.farmate

interface PageChangeListener {
    fun changePage(page: Page, checked: Boolean = false)
    fun finishApp()
}

enum class Page {
    LOGIN, HOME, DETAIL, CONTACT, MY, SEARCH
}