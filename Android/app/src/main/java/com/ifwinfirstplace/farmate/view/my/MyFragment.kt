package com.ifwinfirstplace.farmate.view.my

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.ifwinfirstplace.farmate.R
import com.ifwinfirstplace.farmate.databinding.FragmentMyBinding

class MyFragment : Fragment() {
    private var _binding : FragmentMyBinding? = null
    private val binding: FragmentMyBinding
        get() = requireNotNull(_binding)

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_my, container, false)
    }
}