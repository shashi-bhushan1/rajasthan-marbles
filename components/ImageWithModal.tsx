"use client";

import { useState } from "react";
import ImageCarousel from "@/components/ImageCarousel";
import ImageModal from "@/components/ImageModal";

interface ImageWithModalProps {
  images: string[];
  /** Display name for alt text (e.g. tile name, granite name) */
  itemName: string;
  className?: string;
}

export default function ImageWithModal({
  images,
  itemName,
  className = "",
}: ImageWithModalProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <ImageCarousel
        images={images}
        itemName={itemName}
        className={className}
        value={currentIndex}
        onChange={setCurrentIndex}
        onImageClick={() => setModalOpen(true)}
      />
      <ImageModal
        images={images}
        itemName={itemName}
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
