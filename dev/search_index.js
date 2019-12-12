var documenterSearchIndex = {"docs":
[{"location":"#SymArrays.jl-1","page":"Home","title":"SymArrays.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Modules = [SymArrays]","category":"page"},{"location":"#SymArrays.SymArr_ifsym-Tuple{Any,Any}","page":"Home","title":"SymArrays.SymArr_ifsym","text":"SymArr_ifsym(A,Nsyms) make a SymArray if there is some symmetry (i.e., any of the Nsyms are not 1)\n\n\n\n\n\n","category":"method"},{"location":"#SymArrays.binomial_simple-Union{Tuple{T}, Tuple{T,T}} where T<:Integer","page":"Home","title":"SymArrays.binomial_simple","text":"based on Base.binomial, but without negative values for n and without overflow checks (index calculations here should not overflow if the array does not have more elements than an Int64 can represent)\n\n\n\n\n\n","category":"method"},{"location":"#SymArrays.check_contraction_compatibility-Union{Tuple{nS}, Tuple{nA}, Tuple{NA}, Tuple{Nsymsres}, Tuple{NsymsS}, Tuple{TU}, Tuple{U}, Tuple{T}, Tuple{SymArray{Nsymsres,TU,N,M,datType} where datType<:AbstractArray where M where N,Union{DenseArray{T,NA}, ReinterpretArray{T,NA,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, ReshapedArray{T,NA,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, SubArray{T,NA,A,I,L} where L where I<:Tuple{Vararg{Union{Int64, AbstractRange{Int64}, AbstractCartesianIndex},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, ReshapedArray{T,N,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, DenseArray}},SymArray{NsymsS,U,N,M,datType} where datType<:AbstractArray where M where N,Val{nA},Val{nS}}} where nS where nA where NA where Nsymsres where NsymsS where TU where U where T","page":"Home","title":"SymArrays.check_contraction_compatibility","text":"Check if the arguments correspond to a valid contraction. Do all \"static\" checks at compile time.\n\n\n\n\n\n","category":"method"},{"location":"#SymArrays.contract_symindex!-Union{Tuple{Nsym}, Tuple{sizeS13unit}, Tuple{sizeA13unit}, Tuple{TU}, Tuple{U}, Tuple{T}, Tuple{Array{TU,5},Array{T,3},Val{sizeA13unit},Array{U,3},Val{sizeS13unit},Val{Nsym}}} where Nsym where sizeS13unit where sizeA13unit where TU where U where T","page":"Home","title":"SymArrays.contract_symindex!","text":"A[iAprev,icntrct,iApost] S[iSprev,Icntrct,ISpost] res[iAprev,iApost,iSprev,Icntrct-1,ISpost]\n\n\n\n\n\n","category":"method"},{"location":"#SymArrays.symgrp_size-Tuple{Any,Any}","page":"Home","title":"SymArrays.symgrp_size","text":"size of a single symmetric group with Nsym dimensions and size Nt per dimension\n\n\n\n\n\n","category":"method"},{"location":"#SymArrays.which_symgrp-Union{Tuple{T}, Tuple{T,Any}} where T<:SymArray","page":"Home","title":"SymArrays.which_symgrp","text":"return the symmetry group index and the number of symmetric indices in the group\n\n\n\n\n\n","category":"method"},{"location":"#SymArrays.@symind_binomial-Tuple{Any,Integer,Integer}","page":"Home","title":"SymArrays.@symind_binomial","text":"calculate binomial(ii+n+offset,n), equal to prod((ii+j+offset)/j, j=1:n) This shows up in size and index calculations for arrays with symmetric indices.\n\n\n\n\n\n","category":"macro"}]
}
