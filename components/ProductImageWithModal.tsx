"use client";

import { useState } from "react";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import ProductImageModal from "@/components/ProductImageModal";

interface ProductImageWithModalProps {
  images: string[];
  productName: string;
  className?: string;
}

export default function ProductImageWithModal({
  images,
  productName,
  className = "",
}: ProductImageWithModalProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <ProductImageCarousel
        images={images}
        productName={productName}
        className={className}
        value={currentIndex}
        onChange={setCurrentIndex}
        onImageClick={() => setModalOpen(true)}
      />
      <ProductImageModal
        images={images}
        productName={productName}
        initialIndex={currentIndex}
        isOpen={modalOpen}
        onClose={(index) => {
          setCurrentIndex(index);
          setModalOpen(false);
        }}
      />
    </>
  );
}
