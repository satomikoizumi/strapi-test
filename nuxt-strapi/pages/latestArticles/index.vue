<template>
  <div class="bg-white text-sumi-900 leading-normal tracking-1">
  <mag2Header />
    <section>
      <div class="bg-[#FDF9E9]">
      お知らせ
      </div>
    </section>
    <section class="l-article">
      <div class="py-20 flex flex-col gap-12">
        <section><!-- 記事ピックアップエリア -->
          <div class="mx-auto relative  flex max-w-[1280px]">
            <ClientOnly>
              <swiper-container
                class="swiper-basic px-10  w-full"
                ref="swiperBasicRef"
                space-between="8"
                slidesPerView="auto"
                :loop="true"
                :navigation="{
                  nextEl: '.swiper-button-next1',
                  prevEl: '.swiper-button-prev1',
                }"
                :mousewheel="{
                  forceToAxis: true,
                }"
                :watchSlidesProgress="true"
              >
                <swiper-slide :key="0"  class="flex flex-col py-2 w-full max-w-[300px] h-auto">
                  <a href="" class="flex w-full border border-sumi-200 block rounded-sm overflow-hidden hover:border-sumi transition duration-150ms hover:opacity-80 bg-bay-950">
                    <div class="shrink-0">
                      <img src="https://www.mag2.com/images/MagazineCover/0001323030c.jpg" alt="名前" class="object-cover aspect-square h-[100px]">
                    </div>
                    <div class="flex flex-col justify-between grow pt-2 pb-4 pl-4 pr-4 w-full gap-2">
                      <div class="flex flex-col gap-2 grow">
                        <p class="font-bold line-clamp-2 text-white">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
                        <p class="text-mag2-2xs text-sumi-200">著者名</p>
                      </div>
                    </div>
                  </a>
                </swiper-slide>
                <swiper-slide :key="0"  class="flex flex-col py-2 w-full max-w-[300px] h-auto">
                  <a href="" class="flex w-full border border-sumi-200 block rounded-sm overflow-hidden hover:border-sumi transition duration-150ms hover:opacity-80 bg-bay-950">
                    <div class="shrink-0">
                      <img src="https://www.mag2.com/images/MagazineCover/0001092981c.png" alt="名前" class="object-cover aspect-square h-[100px]">
                    </div>
                    <div class="flex flex-col justify-between grow pt-2 pb-4 pl-4 pr-4 w-full gap-2">
                      <div class="flex flex-col gap-2 grow">
                        <p class="font-bold line-clamp-2 text-white">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
                        <p class="text-mag2-2xs text-sumi-200">著者名</p>
                      </div>
                    </div>
                  </a>
                </swiper-slide>
                <swiper-slide :key="0"  class="flex flex-col py-2 w-full max-w-[300px] h-auto">
                  <a href="" class="flex w-full border border-sumi-200 block rounded-sm overflow-hidden hover:border-sumi transition duration-150ms hover:opacity-80 bg-bay-950">
                    <div class="shrink-0">
                      <img src="https://www.mag2.com/images/MagazineCover/0001323030c.jpg" alt="名前" class="object-cover aspect-square h-[100px]">
                    </div>
                    <div class="flex flex-col justify-between grow pt-2 pb-4 pl-4 pr-4 w-full gap-2">
                      <div class="flex flex-col gap-2 grow">
                        <p class="font-bold line-clamp-2 text-white">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
                        <p class="text-mag2-2xs text-sumi-200">著者名</p>
                      </div>
                    </div>
                  </a>
                </swiper-slide>
                <swiper-slide :key="0"  class="flex flex-col py-2 w-full max-w-[300px] h-auto">
                  <a href="" class="flex w-full border border-sumi-200 block rounded-sm overflow-hidden hover:border-sumi transition duration-150ms hover:opacity-80 bg-bay-950">
                    <div class="shrink-0">
                      <img src="https://www.mag2.com/images/MagazineCover/0001092981c.png" alt="名前" class="object-cover aspect-square h-[100px]">
                    </div>
                    <div class="flex flex-col justify-between grow pt-2 pb-4 pl-4 pr-4 w-full gap-2">
                      <div class="flex flex-col gap-2 grow">
                        <p class="font-bold line-clamp-2 text-white">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
                        <p class="text-mag2-2xs text-sumi-200">著者名</p>
                      </div>
                    </div>
                  </a>
                </swiper-slide>
                <swiper-slide :key="0"  class="flex flex-col py-2 w-full max-w-[300px] h-auto">
                  <a href="" class="flex w-full border border-sumi-200 block rounded-sm overflow-hidden hover:border-sumi transition duration-150ms hover:opacity-80 bg-bay-950">
                    <div class="shrink-0">
                      <img src="https://www.mag2.com/images/MagazineCover/0001323030c.jpg" alt="名前" class="object-cover aspect-square h-[100px]">
                    </div>
                    <div class="flex flex-col justify-between grow pt-2 pb-4 pl-4 pr-4 w-full gap-2">
                      <div class="flex flex-col gap-2 grow">
                        <p class="font-bold line-clamp-2 text-white">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
                        <p class="text-mag2-2xs text-sumi-200">著者名</p>
                      </div>
                    </div>
                  </a>
                </swiper-slide>
              </swiper-container>
            </ClientOnly>
              <button @click="swiper1.prev()" class="swiper-button-prev2 absolute h-[16px] w-[16px] aspect-square rounded-full cursor-pointer z-10 inset-y-1/2 left-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#222"><path d="m414.67-480.67 170 170q9.66 9.67 9.33 23.34-.33 13.66-10 23.33-9.67 9.67-23.67 9.67-14 0-23.66-9.67L343.33-457.33q-5.33-5.34-7.5-11-2.16-5.67-2.16-12.34 0-6.66 2.16-12.33 2.17-5.67 7.5-11l194-194q9.67-9.67 23.67-9.67 14 0 23.67 9.67 9.66 9.67 9.66 23.67 0 14-9.66 23.66l-170 170Z"/></svg>
              </button>
              <button @click="swiper1.next()" class="swiper-button-next2 absolute h-[16px] w-[16px] aspect-square rounded-full cursor-pointer z-10 inset-y-1/2 right-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#222"><path d="m521.33-480.67-170-170q-9.66-9.66-9.33-23.33.33-13.67 10-23.33 9.67-9.67 23.67-9.67 14 0 23.66 9.67L592.67-504q5.33 5.33 7.5 11 2.16 5.67 2.16 12.33 0 6.67-2.16 12.34-2.17 5.66-7.5 11l-194 194q-9.67 9.66-23.34 9.33-13.66-.33-23.33-10-9.67-9.67-9.67-23.67 0-14 9.67-23.66l169.33-169.34Z"/></svg>
              </button>
          </div>
        </section>
        <section>
          <div class="mx-auto flex flex-col max-w-[600px]">
            <div class="border-b border-sumi-100 px-4 py-6 w-full last:border-none">
              <div class="flex gap-2">
                <div class="shrink-0">
                  <div class="rounded-full overflow-hidden">
                    <img src="https://www.mag2.com/images/MagazineCover/0001323030c.jpg" alt="名前" class="object-cover aspect-square h-[56px]" style="-webkit-backface-visibility: hidden;">
                  </div>
                </div>
                <div class="grow w-full flex flex-col gap-6">
                  <div>
                    <div class="font-bold text-mag2-lg">
                      週刊Life is beautiful ２０２５年４月２９日号：生成系AIの経済、ダビンチ風イラスト、未来予測本、水中Immersive Video、AI-native スタートアップ
                    </div>
                    <div class="text-mag2-2xs text-sumi-400">
                      中島聡
                    </div>
                  </div>
                  <div class="leading-article line-clamp-12"><!-- 下記は改行するように指定して上げる必要がありそう -->
今週のざっくばらん<br>
ブートキャンプ<br>
私が2018年にNPOとして立ち上げたシンギュラリティ・ソサエティですが、2023年から「ブートキャンプ」と開発者向けのプログラムを開催しており、今年で3年目になります。<br>
ブートキャンプは、「実際に手を動かしてもの作りをすることが何よりもの勉強になる」という発想の元にスタートしたプログラムで、参加者は、数ヶ月間の間、個人もしくはグループでアプリ・サービス・デバイスの開発に参加していただくプログラムです。第三期の参加者を募集しているので、興味のある方は、是非とも下のリンクから募集要項を参照してください。<br>
第3回 Singularity Society BootCamp開催のお知らせ！！<br>イルカの群れとの遭遇3月の後半を日本で過ごした後、一旦シアトルに戻り、再びハワイに来ています。<br>
クジラの季節は終わってしまいましたが（冬場、出産と繁殖のためにハワイ近辺に来ていたザトウクジラは、4月になると、食事のためにアラスカに戻ってしまいます）、イルカ（スピナードルフィン、日本ではハシナガイルカ）は一年中いるので、海で活動していると、たまに遭遇します。先週は珍しく、泳いでいる時に１回、カヌーをしている時に２回も遭遇しました。ハワイのイルカは、100頭以上の群れで行動するため、運が良いと周りをイルカに囲まれてしまいます。下の写真は、カヌーで遭遇した時のものですが、名前の由来になっているスピンジャンプから、捕食のためと思われる群れで水面に出てくる動作などが、とても美しく、毎回、感動してしまいます。
                  </div>
                  <div class="text-right">
                    <a href="" class="text-light-mode underline hover:opacity-80">続きを読む ></a>
                  </div>
                  <div class="text-right text-mag2-2xs text-sumi-400">
                    2025年5月2日配信号
                  </div>
                  <div class="flex gap-y-0 gap-x-2 flex-wra">
                    <a href="" class="text-mag2-2xs text-sumi-400 hover:underline">#ニュース・情報源</a>
                    <a href="" class="text-mag2-2xs text-sumi-400 hover:underline">#ニュース・情報源</a>
                  </div>
                  <div class="flex justify-end text-sumi-400 gap-2">
                    <button class="w-fit flex justify-center font-normal">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#808080"><path d="M480-147q-14 0-28.5-5T426-168l-69-63q-106-97-191.5-192.5T80-634q0-94 63-157t157-63q53 0 100 22.5t80 61.5q33-39 80-61.5T660-854q94 0 157 63t63 157q0 115-85 211T602-230l-68 62q-11 11-25.5 16t-28.5 5Zm-38-543q-29-41-62-62.5T300-774q-60 0-100 40t-40 100q0 52 37 110.5T285.5-410q51.5 55 106 103t88.5 79q34-31 88.5-79t106-103Q726-465 763-523.5T800-634q0-60-40-100t-100-40q-47 0-80 21.5T518-690q-7 10-17 15t-21 5q-11 0-21-5t-17-15Zm38 189Z"/></svg>
                      100
                    </button>
                    <button class="w-fit flex justify-center font-normal">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#808080"><path d="m480-240-168 72q-40 17-76-6.5T200-241v-519q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v519q0 43-36 66.5t-76 6.5l-168-72Zm0-88 200 86v-518H280v518l200-86Zm0-432H280h400-200Z"/></svg>
                      100
                    </button>
                    <button class="w-fit flex justify-center font-normal">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 19.9998C5.45 19.9998 4.97917 19.804 4.5875 19.4123C4.19583 19.0206 4 18.5498 4 17.9998V15.9998C4 15.7165 4.09583 15.479 4.2875 15.2873C4.47917 15.0956 4.71667 14.9998 5 14.9998C5.28333 14.9998 5.52083 15.0956 5.7125 15.2873C5.90417 15.479 6 15.7165 6 15.9998V17.9998H18V15.9998C18 15.7165 18.0958 15.479 18.2875 15.2873C18.4792 15.0956 18.7167 14.9998 19 14.9998C19.2833 14.9998 19.5208 15.0956 19.7125 15.2873C19.9042 15.479 20 15.7165 20 15.9998V17.9998C20 18.5498 19.8042 19.0206 19.4125 19.4123C19.0208 19.804 18.55 19.9998 18 19.9998H6ZM11 7.8498L9.125 9.7248C8.925 9.9248 8.6875 10.0206 8.4125 10.0123C8.1375 10.004 7.9 9.8998 7.7 9.6998C7.51667 9.4998 7.42083 9.26647 7.4125 8.9998C7.40417 8.73314 7.5 8.4998 7.7 8.2998L11.3 4.6998C11.4 4.5998 11.5083 4.52897 11.625 4.4873C11.7417 4.44564 11.8667 4.4248 12 4.4248C12.1333 4.4248 12.2583 4.44564 12.375 4.4873C12.4917 4.52897 12.6 4.5998 12.7 4.6998L16.3 8.2998C16.5 8.4998 16.5958 8.73314 16.5875 8.9998C16.5792 9.26647 16.4833 9.4998 16.3 9.6998C16.1 9.8998 15.8625 10.004 15.5875 10.0123C15.3125 10.0206 15.075 9.9248 14.875 9.7248L13 7.8498V14.9998C13 15.2831 12.9042 15.5206 12.7125 15.7123C12.5208 15.904 12.2833 15.9998 12 15.9998C11.7167 15.9998 11.4792 15.904 11.2875 15.7123C11.0958 15.5206 11 15.2831 11 14.9998V7.8498Z" fill="#808080"/>
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="border-b border-sumi-100 px-4 py-6 w-full last:border-none">
              <div class="flex gap-2">
                <div class="shrink-0">
                  <div class="rounded-full overflow-hidden">
                    <img src="https://www.mag2.com/images/MagazineCover/0001323030c.jpg" alt="名前" class="object-cover aspect-square h-[56px]" style="-webkit-backface-visibility: hidden;">
                  </div>
                </div>
                <div class="grow w-full flex flex-col gap-6">
                  <div>
                    <div class="font-bold text-mag2-lg">
                      週刊Life is beautiful ２０２５年４月２９日号：生成系AIの経済、ダビンチ風イラスト、未来予測本、水中Immersive Video、AI-native スタートアップ
                    </div>
                    <div class="text-mag2-2xs text-sumi-400">
                      中島聡
                    </div>
                  </div>
                  <div class="leading-article line-clamp-12"><!-- 下記は改行するように指定して上げる必要がありそう -->
今週のざっくばらん<br>
ブートキャンプ<br>
私が2018年にNPOとして立ち上げたシンギュラリティ・ソサエティですが、2023年から「ブートキャンプ」と開発者向けのプログラムを開催しており、今年で3年目になります。<br>
ブートキャンプは、「実際に手を動かしてもの作りをすることが何よりもの勉強になる」という発想の元にスタートしたプログラムで、参加者は、数ヶ月間の間、個人もしくはグループでアプリ・サービス・デバイスの開発に参加していただくプログラムです。第三期の参加者を募集しているので、興味のある方は、是非とも下のリンクから募集要項を参照してください。<br>
第3回 Singularity Society BootCamp開催のお知らせ！！<br>イルカの群れとの遭遇3月の後半を日本で過ごした後、一旦シアトルに戻り、再びハワイに来ています。<br>
クジラの季節は終わってしまいましたが（冬場、出産と繁殖のためにハワイ近辺に来ていたザトウクジラは、4月になると、食事のためにアラスカに戻ってしまいます）、イルカ（スピナードルフィン、日本ではハシナガイルカ）は一年中いるので、海で活動していると、たまに遭遇します。先週は珍しく、泳いでいる時に１回、カヌーをしている時に２回も遭遇しました。ハワイのイルカは、100頭以上の群れで行動するため、運が良いと周りをイルカに囲まれてしまいます。下の写真は、カヌーで遭遇した時のものですが、名前の由来になっているスピンジャンプから、捕食のためと思われる群れで水面に出てくる動作などが、とても美しく、毎回、感動してしまいます。
                  </div>
                  <div class="text-right">
                    <a href="" class="text-light-mode underline hover:opacity-80">続きを読む ></a>
                  </div>
                  <div class="text-right text-mag2-2xs text-sumi-400">
                    2025年5月2日配信号
                  </div>
                  <div class="flex gap-y-0 gap-x-2 flex-wra">
                    <a href="" class="text-mag2-2xs text-sumi-400 hover:underline">#ニュース・情報源</a>
                    <a href="" class="text-mag2-2xs text-sumi-400 hover:underline">#ニュース・情報源</a>
                  </div>
                  <div class="flex justify-end text-sumi-400 gap-2">
                    <button class="w-fit flex justify-center font-normal">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#808080"><path d="M480-147q-14 0-28.5-5T426-168l-69-63q-106-97-191.5-192.5T80-634q0-94 63-157t157-63q53 0 100 22.5t80 61.5q33-39 80-61.5T660-854q94 0 157 63t63 157q0 115-85 211T602-230l-68 62q-11 11-25.5 16t-28.5 5Zm-38-543q-29-41-62-62.5T300-774q-60 0-100 40t-40 100q0 52 37 110.5T285.5-410q51.5 55 106 103t88.5 79q34-31 88.5-79t106-103Q726-465 763-523.5T800-634q0-60-40-100t-100-40q-47 0-80 21.5T518-690q-7 10-17 15t-21 5q-11 0-21-5t-17-15Zm38 189Z"/></svg>
                      100
                    </button>
                    <button class="w-fit flex justify-center font-normal">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#808080"><path d="m480-240-168 72q-40 17-76-6.5T200-241v-519q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v519q0 43-36 66.5t-76 6.5l-168-72Zm0-88 200 86v-518H280v518l200-86Zm0-432H280h400-200Z"/></svg>
                      100
                    </button>
                    <button class="w-fit flex justify-center font-normal">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 19.9998C5.45 19.9998 4.97917 19.804 4.5875 19.4123C4.19583 19.0206 4 18.5498 4 17.9998V15.9998C4 15.7165 4.09583 15.479 4.2875 15.2873C4.47917 15.0956 4.71667 14.9998 5 14.9998C5.28333 14.9998 5.52083 15.0956 5.7125 15.2873C5.90417 15.479 6 15.7165 6 15.9998V17.9998H18V15.9998C18 15.7165 18.0958 15.479 18.2875 15.2873C18.4792 15.0956 18.7167 14.9998 19 14.9998C19.2833 14.9998 19.5208 15.0956 19.7125 15.2873C19.9042 15.479 20 15.7165 20 15.9998V17.9998C20 18.5498 19.8042 19.0206 19.4125 19.4123C19.0208 19.804 18.55 19.9998 18 19.9998H6ZM11 7.8498L9.125 9.7248C8.925 9.9248 8.6875 10.0206 8.4125 10.0123C8.1375 10.004 7.9 9.8998 7.7 9.6998C7.51667 9.4998 7.42083 9.26647 7.4125 8.9998C7.40417 8.73314 7.5 8.4998 7.7 8.2998L11.3 4.6998C11.4 4.5998 11.5083 4.52897 11.625 4.4873C11.7417 4.44564 11.8667 4.4248 12 4.4248C12.1333 4.4248 12.2583 4.44564 12.375 4.4873C12.4917 4.52897 12.6 4.5998 12.7 4.6998L16.3 8.2998C16.5 8.4998 16.5958 8.73314 16.5875 8.9998C16.5792 9.26647 16.4833 9.4998 16.3 9.6998C16.1 9.8998 15.8625 10.004 15.5875 10.0123C15.3125 10.0206 15.075 9.9248 14.875 9.7248L13 7.8498V14.9998C13 15.2831 12.9042 15.5206 12.7125 15.7123C12.5208 15.904 12.2833 15.9998 12 15.9998C11.7167 15.9998 11.4792 15.904 11.2875 15.7123C11.0958 15.5206 11 15.2831 11 14.9998V7.8498Z" fill="#808080"/>
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  <mag2Footer />
  </div>
</template>

<script>

</script>

<script setup lang="ts">
//import { useSwiper } from '#imports' //インポートどうするか
//import { ref } from 'vue' //書き換えしないので一旦監視削除

// meta setting
const title = ref('最新記事一覧')
const description = ref('日本初・世界最大級のメールマガジン (メルマガ)ポータル。ビジネス利用から個人の趣味まで、無料で登録・発行！パソコンひとつで誰でもカンタンに情報発信できます。発行者向け支援サービスも充実していますので安心です。')
const siteName = ref('まぐまぐ')
useHead({
  meta: [
    { name: 'description', content: description }
  ],
  title: '%title %separator %siteName',
  templateParams: {
    title: title,
    siteName: siteName,
    separator: '|'
  }
})
useSeoMeta({
  ogTitle: `%title %separator %siteName`,
  description: description,
  ogDescription: description,
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

// Swiper setting
// https://nuxt.com/modules/swiper
const swiperBasicRef = ref(null);
const swiper1 = useSwiper(swiperBasicRef);


// Composables から Strapi クライアントを取得
const strapi = useStrapi()
const top = ref<any>(null)

const fetchTop = async () => {
  // Collection が 1 件しかない想定で最初の1件を取得
  const { data } = await strapi.find('articles', {
    populate: ['banner']
  })

  console.log('data[0]', data[0])
  top.value = data[0]
}

onMounted(fetchTop)

// 参考 https://awesomecatsis.com/news-api-asyncdata-axios/#:~:text=asyncData%E3%82%84fetch%E3%82%92%E4%BD%BF%E3%81%8A%E3%81%86%20*%20Nuxt.js%20%E3%81%AE%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%82%92%E5%A7%8B%E3%82%81%E3%82%8B%20*%20News%20API%E3%82%92%E5%A7%8B%E3%82%81%E3%82%88%E3%81%86,store/headlines.js%E3%81%A7http%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%20*%20%E3%81%9D%E3%82%8C%E3%81%9E%E3%82%8C%E3%81%AE%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9%E3%82%92%E5%90%84%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%A7%E8%A1%A8%E7%A4%BA%E3%81%97%E3%82%88%E3%81%86%20uuid%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6id%E3%82%92%E7%94%9F%E6%88%90%E3%81%97%E3%82%88%E3%81%86%20%E3%83%80%E3%82%A4%E3%83%8A%E3%83%9F%E3%83%83%E3%82%AF%E3%83%AB%E3%83%BC%E3%83%88%E3%82%92%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B%20*%20%E3%81%95%E3%81%84%E3%81%94%E3%81%AB



// バナー画像のフル URL を組み立て
const bannerUrl = computed(() => {
  console.log('top.value.banner.url', top.value.banner[0].url)
  const data = top.value.banner[0] || {}
  return data
    ? `${data.url}`
    : ''
})


</script>

<style>

</style>