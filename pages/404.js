import { useEffect } from "react";

export default function Custom404() {
  useEffect(() => {
    document.getElementById("navbarcont").style.display = "none";
    return () => {
      document.getElementById("navbarcont").style.display = "block";
    };
  }, []);

  return (
    <div class="h-screen w-screen bg-gray-100 dark:bg-darkgray flex items-center">
      <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700 dark:text-gray-200">
        <div class="max-w-md">
          <div class="text-5xl font-dark font-bold">404</div>
          <p class="text-2xl md:text-3xl font-light leading-normal">
            Sorry, Gary couldn't find this page.
          </p>
          <p class="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>

          <a href="/" class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
            Back to Gary Portal
          </a>
        </div>
      </div>
    </div>
  );
}
