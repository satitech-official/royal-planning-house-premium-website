"use client";

import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <Swiper
      className="testimonial-slider"
      modules={[Pagination, Autoplay, Keyboard]}
      slidesPerView={1}
      spaceBetween={24}
      keyboard
      pagination={{ clickable: true }}
      autoplay={{ delay: 4500, disableOnInteraction: true }}
      breakpoints={{
        760: { slidesPerView: 2 },
      }}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={`${testimonial.projectType}-${testimonial.quote}`}>
          <article className="testimonial-card">
            <div className="rating" aria-label={`${testimonial.rating} out of 5 stars`}>
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <Star key={index} size={17} fill="currentColor" aria-hidden="true" />
              ))}
            </div>
            <blockquote>{testimonial.quote}</blockquote>
            <footer>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.projectType}</span>
              <small>{testimonial.location}</small>
            </footer>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

