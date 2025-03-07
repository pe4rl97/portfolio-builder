import { MultipleComponentsData } from "../types";

export const components: MultipleComponentsData = {
  navbar: [
    {
      id: "navbar-1",
      type: "navbar",
      name: "Simple Navigation",
      component: (
        `<nav class="bg-white shadow-lg">
          <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between items-center py-4">
              <h1 class="text-xl font-bold">Portfolio</h1>
              <div class="space-x-4">
                <a href="#home" class="text-gray-600 hover:text-gray-900">Home</a>
                <a href="#about" class="text-gray-600 hover:text-gray-900">About</a>
                <a href="#contact" class="text-gray-600 hover:text-gray-900">Contact</a>
              </div>
            </div>
          </div>
        </nav>`
      )
    },
    {
      id: "navbar-2",
      type: "navbar",
      name: "Dark Navigation",
      component: (
        `<nav class="bg-gray-900 text-white shadow-lg">
          <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between items-center py-4">
              <h1 class="text-xl font-bold">Brand</h1>
              <div class="space-x-4">
                <a href="#home" class="hover:text-gray-300">Home</a>
                <a href="#about" class="hover:text-gray-300">About</a>
                <a href="#contact" class="hover:text-gray-300">Contact</a>
              </div>
            </div>
          </div>
        </nav>`
      )
    },
  ],
  hero: [
    {
      id: "hero-1",
      type: "hero",
      name: "Centered Hero",
      component: (
        `<section class="bg-blue-50 py-20" id="home">
          <div class="max-w-6xl mx-auto text-center">
            <h1 class="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p class="text-gray-600 mb-8">A passionate developer creating awesome things</p>
            <button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              View Work
            </button>
          </div>
        </section>`
      )
    },
    {
      id: "hero-2",
      type: "hero",
      name: "Hero with Image",
      component: (
        `<section class="bg-gray-100 py-20" id="home">
          <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            <div class="w-full md:w-1/2 text-center md:text-left">
              <h1 class="text-4xl font-bold mb-4">Build Amazing Websites</h1>
              <p class="text-gray-600 mb-6">Showcase your skills with a powerful website.</p>
              <button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                Get Started
              </button>
            </div>
            <div class="w-full md:w-1/2">
              <img src="https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0" alt="Hero Image" class="mx-auto"/>
            </div>
          </div>
        </section>`
      )
    },
  ],
  about: [
    {
      id: "about-1",
      type: "about",
      name: "About Me",
      component: (
        `<section class="bg-white py-20" id="about">
          <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-4">About Me</h2>
            <p class="text-gray-600 mb-8">
              I am a passionate developer creating awesome web applications.
            </p>
            <p class="text-gray-600">
              I specialize in building full-stack applications with React and Node.js.
            </p>
          </div>
        </section>`
      )
    },
    {
      id: "about-2",
      type: "about",
      name: "Detailed About Section",
      component: (
        `<section class="bg-gray-100 py-20" id="about">
          <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            <div class="w-full md:w-1/2">
              <img src="https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0" alt="About Image" class="rounded-lg shadow-lg"/>
            </div>
            <div class="w-full md:w-1/2 text-center md:text-left px-6">
              <h2 class="text-3xl font-bold mb-4">Hi, I'm a Web Developer</h2>
              <p class="text-gray-600 mb-4">
                I love creating elegant and efficient web solutions.
              </p>
              <p class="text-gray-600">
                From front-end design to back-end architecture, I bring ideas to life with code.
              </p>
            </div>
          </div>
        </section>`
      )
    },
  ],
  contact: [
    {
      id: "contact-1",
      type: "contact",
      name: "Contact Me",
      component: (
        `<section class="bg-blue-50 py-20" id="contact">
          <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-4">Contact Me</h2>
            <p class="text-gray-600 mb-8">
              Have a project in mind? Let's work together.
            </p>
            <a href="mailto:" class="text-blue-500 underline">Email Me</a>
          </div>
        </section>`
      )
    },
    {
      id: "contact-2",
      type: "contact",
      name: "Contact Form",
      component: (
        `<section class="bg-white py-20" id="contact">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-6">Get in Touch</h2>
            <form class="space-y-4">
              <input type="text" placeholder="Name" class="w-full p-3 border rounded-lg"/>
              <input type="email" placeholder="Email" class="w-full p-3 border rounded-lg"/>
              <textarea placeholder="Message" class="w-full p-3 border rounded-lg"></textarea>
              <button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 w-full">
                Send Message
              </button>
            </form>
          </div>
        </section>`
      )
    },
  ],
  footer: [
    {
      id: "footer-1",
      type: "footer",
      name: "Simple Footer",
      component: (
        `<footer class="bg-gray-800 text-white py-4">
          <div class="max-w-6xl mx-auto text-center">
            <p>&copy; 2025 Portfolio. All rights reserved.</p>
            <div class="mt-2">
              <a href="#" class="text-blue-500 hover:underline">Privacy Policy</a>
              <a href="#" class="text-blue-500 hover:underline ml-4">Terms of Service</a>
            </div>
          </div>
        </footer>`
      )
    },
    {
      id: "footer-2",
      type: "footer",
      name: "Social Media Footer",
      component: (
        `<footer class="bg-gray-900 text-white py-6">
          <div class="max-w-6xl mx-auto text-center">
            <p class="mb-4">Follow Me</p>
            <div class="space-x-4">
              <a href="#" class="text-blue-400 hover:text-blue-600">Twitter</a>
              <a href="#" class="text-blue-400 hover:text-blue-600">LinkedIn</a>
              <a href="#" class="text-blue-400 hover:text-blue-600">GitHub</a>
            </div>
            <p class="mt-4">&copy; 2025 Portfolio. All rights reserved.</p>
          </div>
        </footer>`
      )
    },
  ]
};
