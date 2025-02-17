import React from "react";
import Button from "../components/Button";

export default function Cta() {
  return (
    <section class="bg-blue-600 py-12">
      <div class="grid grid-cols-2 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-extrabold text-white mb-4">
          Ready to launch your next website?
        </h2>
        <div className="flex justify-end">
          <Button
            title="Get in touch now"
            color="text-white"
            bg="bg-blue-color"
          />
        </div>
        <p class="mt-4 text-white">
          Or, take a peek inside our{" "}
          <a href="#" class="underline text-yellow-300">
            design studio
          </a>
        </p>
      </div>
    </section>
  );
}
