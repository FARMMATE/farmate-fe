package com.ifwinfirstplace.farmate.view.login

import android.app.Activity
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import com.ifwinfirstplace.farmate.Const
import com.ifwinfirstplace.farmate.Page
import com.ifwinfirstplace.farmate.PageChangeListener
import com.ifwinfirstplace.farmate.databinding.FragmentLoginBinding

class LoginFragment : Fragment() {
    private var _binding : FragmentLoginBinding? = null
    private val binding : FragmentLoginBinding
        get() = requireNotNull(_binding)

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentLoginBinding.inflate(layoutInflater)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        if(activity is PageChangeListener){
            (activity as PageChangeListener).changePage(Page.LOGIN)
        }
        binding.webView.apply {
            addJavascriptInterface(LoginInterface(findNavController()), "Android")
            loadUrl(Const.ip+":"+Const.port+"/splash")
            settings.javaScriptEnabled = true
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }

}