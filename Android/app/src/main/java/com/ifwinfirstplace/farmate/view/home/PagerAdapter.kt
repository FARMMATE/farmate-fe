package com.ifwinfirstplace.farmate.view.home

import android.graphics.drawable.Drawable
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import androidx.recyclerview.widget.RecyclerView.ViewHolder
import com.bumptech.glide.Glide
import com.bumptech.glide.load.engine.DiskCacheStrategy
import com.ifwinfirstplace.farmate.databinding.PagerItemBinding

class PagerAdapter : RecyclerView.Adapter<ViewHolder>(){

    var list = listOf <Drawable>()
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        return PagerViewHolder(PagerItemBinding.inflate(LayoutInflater.from(parent.context),parent,false))

    }

    override fun getItemCount(): Int {
        return 987654321
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        (holder as PagerViewHolder).bind(list[position%list.size])
    }

    inner class PagerViewHolder(val binding: PagerItemBinding) : ViewHolder(binding.root){
        fun bind(draw : Drawable){
            Glide.with(itemView.context)
                .load(draw)
                .diskCacheStrategy(DiskCacheStrategy.ALL)
                .into(binding.pagerItem)
        }
    }

    fun setDate(list : List<Drawable>){
        this.list = list
    }

}