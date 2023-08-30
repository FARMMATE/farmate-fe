package com.ifwinfirstplace.farmate.view.detail

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import com.ifwinfirstplace.farmate.Const
import com.ifwinfirstplace.farmate.Page
import com.ifwinfirstplace.farmate.PageChangeListener
import com.ifwinfirstplace.farmate.R
import com.ifwinfirstplace.farmate.databinding.FragmentDetailBinding
import com.ifwinfirstplace.farmate.databinding.FragmentHomeBinding
import com.ifwinfirstplace.farmate.view.login.LoginInterface

class DetailFragment : Fragment() {

    private var _binding : FragmentDetailBinding? = null
    private val binding : FragmentDetailBinding
        get() = requireNotNull(_binding)

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        _binding = FragmentDetailBinding.inflate(layoutInflater)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        if(activity is PageChangeListener){
            (activity as PageChangeListener).changePage(Page.DETAIL)
        }
        binding.webView.apply {
            webChromeClient = (activity as PageChangeListener).getWebViewClient()
            loadUrl(Const.ip+":"+ Const.port+"/detail-product")
            settings.javaScriptEnabled = true
        }
    }
    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}