package com.ifwinfirstplace.farmate

import android.content.Intent
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.util.Log
import android.view.View
import android.webkit.ValueCallback
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.result.contract.ActivityResultContracts
import androidx.annotation.RequiresApi
import androidx.appcompat.app.AppCompatActivity
import androidx.navigation.fragment.NavHostFragment
import com.ifwinfirstplace.farmate.databinding.ActivityMainBinding
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import java.io.File
import kotlin.system.exitProcess


class MainActivity : AppCompatActivity(), PageChangeListener {
    private var _binding : ActivityMainBinding? = null;
    private val binding : ActivityMainBinding
        get() = requireNotNull(_binding)
    var uploadMessage: ValueCallback<Array<Uri>>? = null

    var launcher = registerForActivityResult<String, Uri>(ActivityResultContracts.GetContent()) {
        uploadMessage?.onReceiveValue(arrayOf(it))
    }
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        _binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val navHostFragment =
            supportFragmentManager.findFragmentById(R.id.fragmentContainerView) as NavHostFragment
        val navController = navHostFragment.navController

    }

    override fun changePage(page: Page, checked: Boolean) {
        CoroutineScope(Dispatchers.Main).launch {
            when (page) {
                Page.LOGIN -> {
                    binding.appbar.visibility = View.GONE
                }

                Page.HOME -> {
                    binding.appbar.visibility = View.VISIBLE
                    binding.appbarLeft.apply {
                        setImageDrawable(getDrawable(R.drawable.outline_person_24))
                    }

                    binding.appbarRight.apply {
                        setImageDrawable(getDrawable(R.drawable.baseline_search_24))
                    }
                }

                Page.DETAIL -> {
                    binding.appbarLeft.apply {
                        setImageDrawable(getDrawable(R.drawable.baseline_arrow_back_24))
                        setOnClickListener{
                            (this@MainActivity).onBackPressedDispatcher.onBackPressed()
                        }
                    }

                    binding.appbarRight.apply {
                        visibility = View.VISIBLE
                        if(checked) {
                            setImageDrawable(getDrawable(R.drawable.baseline_bookmark_24))
                        }else{
                            setImageDrawable(getDrawable(R.drawable.baseline_bookmark_border_24))
                        }
                    }
                }
                Page.CONTACT -> {
                    binding.appbarLeft.apply {
                        setImageDrawable(getDrawable(R.drawable.baseline_arrow_back_24))
                        setOnClickListener {
                            (this@MainActivity).onBackPressedDispatcher.onBackPressed()
                        }
                    }

                    binding.appbarRight.apply {
                        visibility = View.GONE
                    }
                }
                Page.MY -> {
                    binding.appbarLeft.apply {
                        setImageDrawable(getDrawable(R.drawable.baseline_search_24))
                    }

                    binding.appbarRight.apply {
                        setImageDrawable(getDrawable(R.drawable.baseline_home_24))
                    }
                }
                Page.SEARCH -> {
                    binding.appbarLeft.apply {
                        setImageDrawable(getDrawable(R.drawable.outline_person_24))
                    }

                    binding.appbarRight.apply {
                        setImageDrawable(getDrawable(R.drawable.baseline_home_24))
                    }
                }
            }
        }
    }

    override fun finishApp() {
        moveTaskToBack(true)
        finishAndRemoveTask()
        exitProcess(0)
    }

    override fun getWebViewClient(): WebChromeClient {
        return  MyWebChromeClient()
    }


    inner class MyWebChromeClient : WebChromeClient() {
        override fun onShowFileChooser(
            webView: WebView,
            filePathCallback: ValueCallback<Array<Uri>>,
            fileChooserParams: FileChooserParams
        ): Boolean {
            if(uploadMessage != null){ // 값이 존재하면 널값을 넣어 초기화해주어야 한다.
                uploadMessage!!.onReceiveValue(null)
            }
            uploadMessage = filePathCallback

            launcher.launch("image/*")
            return true
        }
    }
}