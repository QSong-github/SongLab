---
title: Research Interests
layout: page
---
# Research Interests

Our research focuses on three closely related areas in bioinformatics and biomedical informatics as outlined below.


## Data Science and Method Development 

Recent advances in spatial molecular imaging have allowed examination of the spatial landscapes and transcriptional profiles of tumor tissues at subcellular resolution, which is crucial for understanding the tumor spatial microenvironment. Current commercially available technologies for spatial high-plex profiling are capable to accurately capture the locations of targeted transcripts, cell locations, and cell boundaries, accompanied with multi-channel immunohistochemistry (IHC) images. Interrogating such multi-modality spatial profiling for cancer research is challenging and overwhelms traditional machine learning approaches.

We have demonstrated the efficacy of Graph-based artificial intelligence (AI) algorithms in different scenarios of spatial profiling studies. We developed a novel method, Single-cell spatial elucidation through image-augmented Graph transformer (SiGra), to reveal spatial domains and enhance the substantially sparse and noisy data in lung cancer spatial profiles. We proposed a novel adaptive graph model with attention mechanisms named spaCI, which incorporates both spatial locations and gene expression profiles of cells to identify the active Ligand–Receptor (L–R) signaling axis across neighboring cells. spaCI demonstrates revealing the L–R interactions in different cancer types, which could otherwise be hidden due to data sparsity. We also developed a novel graph-based convolutional network model, DSTG, for reliable and accurate decomposition of cell mixtures in the spatially resolved transcriptomics spots of pancreatic cancer tissues. 

These stuides have been published in high-impact journals including Nature Communications (IF: 17.69), Briefings In Bioinformatics (IF: 9.5), Genomics, Proteomics & Bioinformatics (IF: 9.5), etc.


## Single-cell omics and Multi-omics studies in diseases

Single-cell omics has been increasingly popular, revealing new biological knowledge, and reshaping our understanding of cellular heterogeneity. Unlike traditional bulk profiling, single-cell omics measures sequencing data at the single-cell level. However, extracting valuable information from single-cell omics data remains challenging, as extensive batch effects and technical variances exist among diverse data sources, including different molecular layers, operators, and experimental protocols, etc. Therefore, tailored and effective methods are still needed to fully exploit the molecular intricacy in single-cell omics data.

To address such needs, we worked on novel methods on single-cell omics data that contribute to the understanding of the interplay of different molecule layers in the tumor microenvironment. For example, I have developed a robust graph-based convolutional network model, scGCN, to achieve effective knowledge transfer across single-cell omics datasets from different sources (e.g., different tissues, platforms, species, and molecular layers). We also developed a joint statistical method for the integrative analysis of single-cell multi-omics data, which enables the detection of coherent regulatory programs and target genes from unpaired single-cell RNA-seq (scRNA-seq) and single-cell ATAC-seq data of mixed-phenotype acute leukemia11. We proposed a novel Dual-Stream Subspace Clustering Network model, DS-SCNet, to identify biologically meaningful gene clusters from single-cell RNA-seq data, as well as the other scLM method, to reveal the co-expressed gene signals across single-cell datasets from different sources. Another integrative approach of bioinformatics and multi-scale modeling on scRNA-seq and proteomics data enables the temporal drug response prediction of lung tumor cells.

These studies provide fundamental work for gaining unbiased biological insights from the large single-cell omics data repository, which have been published in Nature Communications (IF: 17.69), Briefings In Bioinformatics (IF: 9.5), etc.

We have been actively working on collaborative studies via data-driven informatics approaches to facilitate the understanding of biological mechanisms in different cancer types. For example, to reveal the underlying activities in lung tumor microenvironment, I computationally analyzed the single-cell data from lung cancer patients and revealed intercellular myeloid cells reprogramming whereby tumor cells stimulated monocyte-to-M2 differentiation. In malignant pleural effusion (MPE), we applied single-cell RNA-seq and revealed that intrapleural nano-immunotherapy reprogramed myeloid cells in the tumor microenvironment, reduced MPE and inhibited tumor growth, not only in the pleural cavity but also in the lung parenchyma. For melanoma patients with anti-PD-1 therapy, we used an integrative analysis of bioenergetics, metabolomic profiles, and single-cell RNA-seq data and identified a glycolytic signature characterizing checkpoint inhibitor responders.

Those stuides have been published in high-impact journals including Journal of Experimental Medicine (IF: 17.6), Nature nanotechnology(IF: 40.5), Clinical Cancer Research (IF: 13.8), etc.


## Computational Oncology

With the cancer research community producing vast quantities of molecular and phenotypic data to investigate tumor progression, the concept of big data in cancer field has emerged due to the rapid data accumulation. This presents both opportunities and challenges for discovering novel insights into fundamental questions. Various data types, including genomics, proteomics, transcriptomics, and clinical information such as electronic health records, are available from patient or preclinical samples. It is crucial to analyze such diverse multi-modality data to reveal interpatient heterogeneity and push precision oncology toward clinical care. 

Specifically, in the comprehensive molecular study of gynecologic and breast cancers, we identified the clinically significant patient subtypes and potential therapeutic targets, based on multi-modality data including clinical data, copy number alterations, mutations, DNA methylation, and mRNA expression. For patients with brain metastasis, we identified two distinctive prognostic subtypes through an integrative analysis of their transcriptomic, proteomic, and metabolomic molecular profiles. We also revealed the key pathways and metabolites potentially contribute to the observed survival differences between the two subtypes. During the COVID-19 pandemic, we have been working on characterizing the cancer patients within NCATS’ National COVID Cohort Collaborative (N3C), to investigate the risk factors of COVID-19 breakthrough infections and severe outcomes. My study highlighted patients who received recent immunotherapies or targeted therapies did not have higher risk of overall mortality or breakthrough infection risks, and provided evidence on the effects of COVID-19 on cancer outcomes and the ability to continue specific cancer treatments20. This work and our other collaborative studies revealed fundamental insights valuable to the precise protection of cancer population, which has been covered by national news networks such as U.S. News and Fox News. 

Our work have been published in high-impact journals including Cancer cell (IF: 35.6), Journal of Clinical Oncology (IF:45.3), etc.
