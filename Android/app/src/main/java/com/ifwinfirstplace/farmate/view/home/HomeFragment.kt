package com.ifwinfirstplace.farmate.view.home

import android.app.Activity
import android.content.Context
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.activity.OnBackPressedCallback
import androidx.fragment.app.activityViewModels
import androidx.lifecycle.lifecycleScope
import androidx.navigation.fragment.findNavController
import androidx.viewpager2.widget.ViewPager2
import com.ifwinfirstplace.farmate.MainViewModel
import com.ifwinfirstplace.farmate.Page
import com.ifwinfirstplace.farmate.PageChangeListener
import com.ifwinfirstplace.farmate.R
import com.ifwinfirstplace.farmate.databinding.FragmentHomeBinding
import com.ifwinfirstplace.farmate.databinding.FragmentLoginBinding
import com.ifwinfirstplace.farmate.databinding.ProductItemBinding
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay

class HomeFragment : Fragment() {

    private var _binding : FragmentHomeBinding? = null
    private val binding : FragmentHomeBinding
        get() = requireNotNull(_binding)
    private val viewModel: MainViewModel by activityViewModels()

    private lateinit var callback: OnBackPressedCallback
    private lateinit var job : Job
    private var bannerPosition = 0
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        scrollJobCreate()
        _binding = FragmentHomeBinding.inflate(layoutInflater)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        (activity as PageChangeListener).changePage(Page.HOME)

        val pagerList = listOf(
            resources.getDrawable(R.drawable.watermelon),
            resources.getDrawable(R.drawable.carrot),
            resources.getDrawable(R.drawable.rice),
            resources.getDrawable(R.drawable.peach)
        )
        val adapter = PagerAdapter()

        binding.vpHomeBanner.adapter = adapter
        adapter.setDate(pagerList)

        binding.vpHomeBanner.registerOnPageChangeCallback(object : ViewPager2.OnPageChangeCallback(){
            //사용자가 스크롤 했을때 position 수정
            override fun onPageSelected(position: Int) {
                super.onPageSelected(position)
                bannerPosition = position
                binding.txtHomePage.text = ("${(position)%pagerList.size + 1}  /  ${pagerList.size}")
            }

            override fun onPageScrollStateChanged(state: Int) {
                super.onPageScrollStateChanged(state)
                when (state) {
                    ViewPager2.SCROLL_STATE_IDLE ->{
                        if (!job.isActive) scrollJobCreate()
                    }

                    ViewPager2.SCROLL_STATE_DRAGGING -> {
                        job.cancel()
                    }

                    ViewPager2.SCROLL_STATE_SETTLING -> {}
                }
            }
        })

        val list = listOf(
            ItemInfo("전라남도 완도군 가용리딸기작목반","2023 왕딸기", "for Business", R.drawable.wando_logo, R.drawable.berry , false, "strawberry"),
            ItemInfo("전라남도 장성군","신선한 납짝 복숭아", "for Supporter", R.drawable.jansung, R.drawable.peach, false, "peach" ),
            ItemInfo("전라남도 나주시","땅의 기운을 머금은 풋당근", "for Business", R.drawable.naju, R.drawable.carrot, true, "none"),
            ItemInfo("광주광역시","무등산 수박", "for Business", R.drawable.gwangju, R.drawable.watermelon, false, "none"),
        )

        list.map {
            binding.hsvHomeHarvest.addView(ProductItemBinding.inflate(layoutInflater).apply {

                imgItemLogo.setImageDrawable(resources.getDrawable(it.logoImgId))
                imgItemMain.setImageDrawable(resources.getDrawable(it.mainImgId))
                txtItemTitle.text = it.title
                txtItemFrom.text = it.location
                txtItemTarget.text = it.target
                lyItemMatching.visibility  = if(it.isMatching) View.VISIBLE else View.GONE
                if(it.url != "none") {
                    productItem.setOnClickListener {_ ->
                        viewModel.focusItem = it.url
                        findNavController().navigate(R.id.action_homeFragment_to_detailFragment)
                    }
                }

                cbItemBookmark.setOnClickListener {
                    cbItemBookmark.visibility = View.GONE
                    cbItemBookmarkT.visibility = View.VISIBLE
                }
                cbItemBookmarkT.setOnClickListener {
                    cbItemBookmarkT.visibility = View.GONE
                    cbItemBookmark.visibility = View.VISIBLE
                }

                
            }.root)
        }

    }

    override fun onAttach(context: Context) {
        super.onAttach(context)
        callback = object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                (activity as PageChangeListener).finishApp()
            }
        }
        requireActivity().onBackPressedDispatcher.addCallback(this, callback)
    }

    override fun onDetach() {
        super.onDetach()
        callback.remove()
    }


    override fun onDestroyView() {
        super.onDestroyView()
        job.cancel()
    }
    fun scrollJobCreate() {
        job = lifecycleScope.launchWhenResumed {
            delay(3000)

            binding.vpHomeBanner.setCurrentItem(++bannerPosition, true)
        }
    }
}