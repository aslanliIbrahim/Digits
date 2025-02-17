import React from 'react'

export default function Footer() {
  return (
    <footer class="bg-white py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
    
    <div>
      <h3 class="font-bold text-gray-900">digits:</h3>
      <p class="text-gray-600 mt-2">Digits is a website template built to work seamlessly with the WordPress block editor to create beautifully designed pages in minutes.</p>
    </div>

    <div>
      <h3 class="font-bold text-gray-900">Pages</h3>
      <ul class="mt-2 space-y-2">
        <li><a href="#" class="text-gray-600 hover:text-blue-600">Home</a></li>
        <li><a href="#" class="text-gray-600 hover:text-blue-600">About</a></li>
        <li><a href="#" class="text-gray-600 hover:text-blue-600">News</a></li>
        <li><a href="#" class="text-gray-600 hover:text-blue-600">Pricing</a></li>
        <li><a href="#" class="text-gray-600 hover:text-blue-600">Contact</a></li>
      </ul>
    </div>

    <div>
      <h3 class="font-bold text-gray-900">Demos</h3>
      <ul class="mt-2 space-y-2">
        <li><a href="#" class="text-gray-600 hover:text-blue-600">Classic</a></li>
        <li><a href="#" class="text-gray-600 hover:text-blue-600">Boxy</a></li>
        <li><a href="#" class="text-gray-600 hover:text-blue-600">Gradient</a></li>
        <li><a href="#" class="text-gray-600 hover:text-blue-600">Minimal</a></li>
        <li><a href="#" class="text-gray-600 hover:text-blue-600">Night</a></li>
      </ul>
    </div>

    <div>
      <h3 class="font-bold text-gray-900">Resources</h3>
      <ul class="mt-2 space-y-2">
        <li><a href="#" class="text-gray-600 hover:text-blue-600">Download now</a></li>
        <li><a href="#" class="text-gray-600 hover:text-blue-600">Documentation</a></li>
      </ul>
    </div>
  </div>

  <div class="border-t border-gray-200 mt-8 pt-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
      <p>&copy; 2020 tempy.club</p>
      <div class="flex space-x-6">
        <a href="#" class="hover:text-blue-600">Privacy Policy</a>
        <a href="#" class="hover:text-blue-600">Terms of Use</a>
        <a href="#" class="hover:text-blue-600">GDPR</a>
      </div>
    </div>
  </div>
</footer>
  )
}
