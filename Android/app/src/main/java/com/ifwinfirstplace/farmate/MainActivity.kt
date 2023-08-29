package com.ifwinfirstplace.farmate

import android.os.Bundle
import android.util.Log
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import androidx.navigation.fragment.NavHostFragment
import com.ifwinfirstplace.farmate.databinding.ActivityMainBinding
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlin.system.exitProcess

class MainActivity : AppCompatActivity(), PageChangeListener {
    private var _binding : ActivityMainBinding? = null;
    private val binding : ActivityMainBinding
        get() = requireNotNull(_binding)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        _binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val navHostFragment =
            supportFragmentManager.findFragmentById(R.id.fragmentContainerView) as NavHostFragment
        val navController = navHostFragment.navController

    }

    override fun changePage(page: Page) {
        CoroutineScope(Dispatchers.Main).launch {
            when (page) {
                Page.LOGIN -> {
                    binding.appbar.visibility = View.GONE
                }

                Page.HOME -> {
                    binding.appbar.visibility = View.VISIBLE
                }

                Page.DETAIL -> {}
                Page.CONTACT -> {}
                Page.MY -> {}
                Page.SEARCH -> {}
            }
        }
    }

    override fun finishApp() {
        moveTaskToBack(true)
        finishAndRemoveTask()
        exitProcess(0)
    }
}