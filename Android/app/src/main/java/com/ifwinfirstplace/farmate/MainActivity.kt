package com.ifwinfirstplace.farmate

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import androidx.navigation.NavController
import androidx.navigation.fragment.NavHostFragment
import com.ifwinfirstplace.farmate.databinding.ActivityMainBinding

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
        when(page){
            Page.LOGIN -> {
                binding.appbar.visibility = View.GONE
            }
            Page.HOME -> {}
            Page.DETAIL -> {}
            Page.CONTACT -> {}
            Page.MY -> {}
            Page.SEARCH -> {}
        }
    }
}