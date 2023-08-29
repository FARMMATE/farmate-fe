package com.ifwinfirstplace.farmate

interface PageChangeListener {
    fun changePage(page : Page)
}

enum class Page {
    LOGIN, HOME, DETAIL, CONTACT, MY, SEARCH
}