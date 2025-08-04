<template>
  <div class="bg-[#FFFCF7] text-sumi-900 leading-[150%] tracking-1">
  <mag2Header />
    <section>
      <div class="bg-[#FDF9E9]">
      お知らせ
      </div>
    </section>
    <section class="l-feature">
      <div class="p-4">
        <div class="border border-dashed rounded-xl bg-[url(@/assets/img/bg_tile.png)] bg-repeat">
          <div class="max-w-[1240px] w-full m-auto lg:flex lg:justify-between lg:gap-6">
            <section class="flex flex-col lg:justify-center lg:gap-12 pt-10 pb-10 pl-10">
              <div class="flex items-center gap-2">
                <div class="h-8 w-8 bg-[#FF6B6B] rounded-full border aspect-square"></div>
                <div class="h-8 w-8 bg-[#FFB366] rounded-full border aspect-square"></div>
                <p class="font-bold">コンテンツ発信サービス「まぐまぐ」</p>
              </div>
              <h2 class="text-[4rem] leading-[135%] font-bold">
                記事を公開して<br>
                読者からのサポートを<br>
                受けませんか？
              </h2>
              <button>
                <a href="" class="flex justify-center items-center gap-2 max-w-[400px] w-full text-white h-14 rounded-full border border-sumi-900 transition-[padding] duration-150ms hover:p-1">
                  <div class="bg-sumi-900 flex justify-center items-center w-full h-full rounded-full ">
                    <div>まぐまぐで発行する</div>
                    <div>
                      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>send_plane_line</title><g id="send_plane_line" fill='none'><path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/><path fill='#FFFFFFFF' d='M20.25 3.532a1 1 0 0 1 1.183 1.329l-6 15.5a1 1 0 0 1-1.624.362l-3.382-3.235-1.203 1.202c-.636.636-1.724.186-1.724-.714v-3.288L2.309 9.723a1 1 0 0 1 .442-1.691l17.5-4.5Zm-2.114 4.305-7.998 6.607 3.97 3.798zm-1.578-1.29L4.991 9.52l3.692 3.53 7.875-6.505Z'/></g></svg>
                    </div>
                  </div>
                </a>
              </button><!-- btn -->
            </section>
            <section class="lg:flex lg:flex-col lg:justify-end">
              <div class="max-w-[500px] w-full">
                <div class="">
                  <img src="https://placehold.jp/500x600.png" alt="">
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
    <section class="l-article">
      <div class="py-24 px-4 flex flex-col justify-center gap-24">
        <!-- ピックアップエリア -->
        <section>
          <div class="p-2 border-[#DFDFDF] border w-fit m-auto rounded">
            <div class="flex justify-center">
              <button class="px-4 py-2 text-[14px] font-bold">tab list</button>
              <button class="px-4 py-2 text-[14px] font-bold">tab list</button>
              <button class="px-4 py-2 text-[14px] font-bold">tab list</button>
            </div>
          </div>
          <div class="flex gap-4 justify-center mt-2">
              <a href="" class="relative flex flex-col max-w-[250px] shadow-md block rounded-sm overflow-hidden hover:bg-sumi-50 hover:before:border before:h-full before:w-full before:absolute before:z-1 before:rounded-sm transition duration-150ms hover:-translate-y-2 bg-white">
                <div class="relative aspect-2/1 h-[169px] bg-no-repeat bg-cover bg-center overflow-hidden z-0 before:blur-3xl before:content-[''] before:block before:w-full before:h-full before:absolute before:top-[0px] before:-z-1 before:bg-[url(https://www.mag2.com/images/MagazineCover/0001323030c.jpg)]">
                  <img src="https://www.mag2.com/images/MagazineCover/0001323030c.jpg" alt="名前" class="h-full m-auto object-contain ">
                </div>
                <div class="pt-2 pb-4 pl-4 pr-4 w-full">
                  <p class="font-bold line-clamp-2">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
                  <p class="text-mag2-2xs text-sumi-400">著者名</p>
                  <ul class="mt-2 flex gap-y-0 gap-x-2 flex-wrap">
                    <li class="text-mag2-2xs text-sumi-400">#ニュース・情報源</li>
                    <li class="text-mag2-2xs text-sumi-400">#ニュース・情報源</li>
                  </ul>
                  <div class="flex justify-end items-end"><div class="font-bold">600円/月</div><div class="text-mag2-2xs">(税込)</div></div>
                </div>
              </a>
            <a href="" class="relative flex flex-col max-w-[250px] shadow-md block rounded-sm overflow-hidden hover:bg-sumi-50 hover:before:border before:h-full before:w-full before:absolute before:z-1 before:rounded-sm transition duration-150ms hover:-translate-y-2 bg-white">
              <div class="relative aspect-2/1 h-[169px] bg-no-repeat bg-cover bg-center overflow-hidden z-0 before:blur-3xl before:content-[''] before:block before:w-full before:h-full before:absolute before:top-[0px] before:-z-1 before:bg-[url(https://www.mag2.com/images/MagazineCover/0001092981c.png)]">
                <img src="https://www.mag2.com/images/MagazineCover/0001092981c.png" alt="名前" class="h-full m-auto object-contain">
              </div>
              <div class="pt-2 pb-4 pl-4 pr-4 w-full">
                <p class="font-bold line-clamp-2">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
                <p class="text-mag2-2xs text-sumi-400">著者名</p>
                  <ul class="mt-2 flex gap-y-0 gap-x-2 flex-wrap">
                    <li class="text-mag2-2xs text-sumi-400">#ニュース・情報源</li>
                    <li class="text-mag2-2xs text-sumi-400">#ニュース・情報源</li>
                    <li class="text-mag2-2xs text-sumi-400">#ニュース</li>
                  </ul>
                <div class="flex justify-end items-end"><div class="font-bold">600円/月</div><div class="text-mag2-2xs">(税込)</div></div>
              </div>
            </a>
          </div>
        </section>
        <!-- 最新記事 -->
        <section>
          <div>
            <h2 class="text-mag2-6xl font-bold text-center leading-[150%]">最新記事</h2>
            <div class="text-center"><a href="" class="text-light-mode underline hover:opacity-70">&gt;&nbsp;最新記事をさらに見る</a></div>
          </div>
          <div class="flex gap-4 justify-center mt-2">
            <div class="flex flex-col justify-between gap-4 max-w-[500px] w-full p-8 border border-sumi-200 rounded-md bg-white hover:bg-sumi-50">
              <div>
                <a href="">
                  <img src="https://placehold.jp/400x300.png" alt="" class="w-full">
                </a>
              </div>
              <div class="text-mag2-2xs text-sumi-400 text-right">
                2025年5月2日配信号
              </div>
              <div class="flex gap-y-0 gap-x-2 flex-wra">
                <a href="" class="text-mag2-2xs text-sumi-400">#ニュース・情報源</a>
                <a href="" class="text-mag2-2xs text-sumi-400">#ニュース・情報源</a>
              </div>
              <hr class="border-dashed border-t border-sumi-200 h-px"></hr>
              <div class="flex gap-6 items-center">
                <div class="w-14 h-14 min-w-14 min-h-14 aspect-square rounded-full overflow-hidden object-cover">
                  <a href="">
                    <img src="https://www.mag2.com/images/MagazineCover/0001092981c.png" alt="" class="object-cover">
                  </a>
                </div>
                <div>
                  <a href="">
                    <div class="font-bold line-clamp-3">週刊Life is beautiful ２０２５年４月２９日号：生成系AIの経済、ダビンチ風イラスト、未来予測本、水中Immersive Video、AI-native スタートアップ</div>
                    <div class="text-mag2-2xs text-sumi-400">著者名</div>
                  </a>
                </div>
              </div>
            </div>

            <div class="flex flex-col justify-between gap-4 max-w-[500px] w-full p-8 border border-sumi-200 rounded-md bg-white hover:bg-sumi-50">
              <div>
                <a href="">
                  <pre class="leading-[160%] line-clamp-13 whitespace-pre-wrap">
保手濱です。
皆さん、いつもお読みいただき本当にありがとうございます！！

最近は、かなり、このメルマガ経由で、我々のコミュニティに参画いただき、
イベントに来ていただいたり、運営陣に加わっていただくなどの方が増えております！
本当に、ありがたい限りです。

ぜひ、真理を追求して広げることを通じて、
世の中を劇的に良い方向に、一緒に変えていきましょう！！

読者投稿や、公式LINEでの反応なども順次いただいていますが、
全てにスムーズにお返しできておらず、申し訳ありません。
運営チームの組織化もどんどんと進んでいるので、双方向型の取り組みも、スムーズになるように進めていきたいと思っております！
                  </pre>
                </a>
              </div>
              <div class="text-mag2-2xs text-sumi-400 text-right">
                2025年5月2日配信号
              </div>
              <div class="flex gap-y-0 gap-x-2 flex-wra">
                <a href="" class="text-mag2-2xs text-sumi-400">#ニュース・情報源</a>
                <a href="" class="text-mag2-2xs text-sumi-400">#ニュース・情報源</a>
              </div>
              <hr class="border-dashed border-t border-sumi-200 h-px"></hr>
              <div class="flex gap-6 items-center">
                <div class="w-14 h-14 min-w-14 min-h-14 aspect-square rounded-full overflow-hidden object-cover">
                  <a href="">
                    <img src="https://www.mag2.com/images/MagazineCover/0001092981c.png" alt="" class="object-cover">
                  </a>
                </div>
                <div>
                  <a href="">
                    <div class="leading-[150%] font-bold line-clamp-3">週刊Life is beautiful ２０２５年４月２９日号：生成系AIの経済、ダビンチ風イラスト、未来予測本、水中Immersive Video、AI-native スタートアップ</div>
                    <div class="text-mag2-2xs text-sumi-400">著者名</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- ランキング・新創刊 -->
        <section>
          <div class="flex justify-center" >
            <div class="max-w-[1240px] flex items-start lg:gap-4 lg:flex-row gap-8 flex-col">
              <div class="flex flex-col justify-center gap-2"><!--有料メルマガランキング-->
                <h3 class="flex flex-col text-[20px] font-bold"><a href="" class="flex gap-1 items-center">有料メルマガランキング
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222"><path d="M579-480 285-774q-15-15-14.5-35.5T286-845q15-15 35.5-15t35.5 15l307 308q12 12 18 27t6 30q0 15-6 30t-18 27L356-115q-15 15-35 14.5T286-116q-15-15-15-35.5t15-35.5l293-293Z"/></svg>
                </a></h3>
                <div class="relative flex flex-col shadow-md block rounded-sm overflow-hidden bg-white">
                  <a href="" class="flex items-center gap-4 p-4 hover:bg-sumi-50 h-25">
                    <div>1</div>
                    <div class="w-14 h-14 min-w-14 min-h-14 aspect-square rounded-full overflow-hidden object-cover">
                      <img src="https://placehold.jp/56x56.png" alt="" class="object-cover">
                    </div>
                    <div>
                      <div class="font-bold line-clamp-2 leading-[150%]">
                        週刊 Life is beautiful
                      </div>
                      <div class="text-mag2-2xs text-sumi-400 leading-[150%]">著者名</div>
                    </div>
                  </a>
                  <a href="" class="flex items-center gap-4 p-4 hover:bg-sumi-50 h-25">
                    <div>2</div>
                    <div class="w-14 h-14 min-w-14 min-h-14 aspect-square rounded-full overflow-hidden object-cover">
                      <img src="https://www.mag2.com/images/MagazineCover/0001092981c.png" alt="" class="object-cover">
                    </div>
                    <div>
                      <div class="font-bold line-clamp-2 leading-[150%]">
                        週刊ＭＥＧＡ地震予測
                      </div>
                      <div class="text-mag2-2xs text-sumi-400 leading-[150%]">著者名</div>
                    </div>                  </a>
                  <a href="" class="flex items-center gap-4 p-4 hover:bg-sumi-50 h-25">
                    <div>3</div>
                    <div class="w-14 h-14 min-w-14 min-h-14 aspect-square rounded-full overflow-hidden object-cover">
                      <img src="https://www.mag2.com/images/MagazineCover/0001092981c.png" alt="" class="object-cover">
                    </div>
                    <div>
                      <div class="font-bold line-clamp-2 leading-[150%]">
                        【ファッション・仕事・人生論】MBが教える「美しい大人の情報源！」洋服からビジネスまで月20万文字&限定動画で解説
                      </div>
                      <div class="text-mag2-2xs text-sumi-400 leading-[150%]">著者名</div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="flex flex-col justify-center gap-2"><!--無料メルマガランキング-->
                <h3 class="flex flex-col text-[20px] font-bold"><a href="" class="flex gap-1 items-center">無料メルマガランキング
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222"><path d="M579-480 285-774q-15-15-14.5-35.5T286-845q15-15 35.5-15t35.5 15l307 308q12 12 18 27t6 30q0 15-6 30t-18 27L356-115q-15 15-35 14.5T286-116q-15-15-15-35.5t15-35.5l293-293Z"/></svg>
                </a></h3>
                <div class="relative flex flex-col shadow-md block rounded-sm overflow-hidden bg-white">
                  <a href="" class="flex items-center gap-4 p-4 hover:bg-sumi-50 h-25">
                    <div>1</div>
                    <div class="w-14 h-14 min-w-14 min-h-14 aspect-square rounded-full overflow-hidden object-cover">
                      <img src="https://placehold.jp/56x56.png" alt="" class="object-cover">
                    </div>
                    <div>
                      <div class="font-bold line-clamp-2 leading-[150%]">
                        タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                      </div>
                      <div class="text-mag2-2xs text-sumi-400 leading-[150%]">著者名</div>
                    </div>                  </a>
                  <a href="" class="flex items-center gap-4 p-4 hover:bg-sumi-50 h-25">
                    <div>2</div>
                    <div class="w-14 h-14 min-w-14 min-h-14 aspect-square rounded-full overflow-hidden object-cover">
                      <img src="https://www.mag2.com/images/MagazineCover/0001092981c.png" alt="" class="object-cover">
                    </div>
                    <div>
                      <div class="font-bold line-clamp-2 leading-[150%]">
                        タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                      </div>
                      <div class="text-mag2-2xs text-sumi-400 leading-[150%]">著者名</div>
                    </div>
                  </a>
                  <a href="" class="flex items-center gap-4 p-4 hover:bg-sumi-50 h-25">
                    <div>3</div>
                    <div class="w-14 h-14 min-w-14 min-h-14 aspect-square rounded-full overflow-hidden object-cover">
                      <img src="https://www.mag2.com/images/MagazineCover/0001092981c.png" alt="" class="object-cover">
                    </div>
                    <div>
                      <div class="font-bold line-clamp-2 leading-[150%]">
                        タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                      </div>
                      <div class="text-mag2-2xs text-sumi-400 leading-[150%]">著者名</div>
                    </div>                  </a>
                </div>
              </div>
              <div class="flex flex-col justify-center gap-2"><!--新創刊メルマガ-->
                <h3 class="flex flex-col text-[20px] font-bold"><a href="" class="flex gap-1 items-center">新創刊メルマガ
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222"><path d="M579-480 285-774q-15-15-14.5-35.5T286-845q15-15 35.5-15t35.5 15l307 308q12 12 18 27t6 30q0 15-6 30t-18 27L356-115q-15 15-35 14.5T286-116q-15-15-15-35.5t15-35.5l293-293Z"/></svg>
                </a></h3>
                <div class="relative flex flex-col shadow-md block rounded-sm overflow-hidden bg-white">
                  <a href="" class="flex items-center gap-4 p-4 hover:bg-sumi-50 h-25">
                    <div class="w-14 h-14 min-w-14 min-h-14 aspect-square rounded-full overflow-hidden object-cover">
                      <img src="https://placehold.jp/56x56.png" alt="" class="object-cover">
                    </div>
                    <div>
                      <div class="font-bold line-clamp-2 leading-[150%]">
                        タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                      </div>
                      <div class="text-mag2-2xs text-sumi-400 leading-[150%]">著者名</div>
                    </div>                  </a>
                  <a href="" class="flex items-center gap-4 p-4 hover:bg-sumi-50 h-25">
                    <div class="w-14 h-14 min-w-14 min-h-14 aspect-square rounded-full overflow-hidden object-cover">
                      <img src="https://www.mag2.com/images/MagazineCover/0001092981c.png" alt="" class="object-cover">
                    </div>
                    <div>
                      <div class="font-bold line-clamp-2 leading-[150%]">
                        タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                      </div>
                      <div class="text-mag2-2xs text-sumi-400 leading-[150%]">著者名</div>
                    </div>                  </a>
                  <a href="" class="flex items-center gap-4 p-4 hover:bg-sumi-50 h-25">
                    <div class="w-14 h-14 min-w-14 min-h-14 aspect-square rounded-full overflow-hidden object-cover">
                      <img src="https://www.mag2.com/images/MagazineCover/0001092981c.png" alt="" class="object-cover">
                    </div>
                    <div>
                      <div class="font-bold line-clamp-2 leading-[150%]">
                        タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                      </div>
                      <div class="text-mag2-2xs text-sumi-400 leading-[150%]">著者名</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- バナーエリア -->
        <section>
          <div class="flex justify-center">
            <div class="flex gap-2 p-2 border border-sumi-200 rounded-md">
              <a href="" class="hover:brightness-110">
                <img src="https://placehold.jp/300x100.png" alt="" class="w-[300px]">
              </a>
              <a href="" class="hover:brightness-110">
                <img src="https://placehold.jp/300x100.png" alt="" class="w-[300px]">
              </a>
              <a href="" class="hover:brightness-110">
                <img src="https://www.mag2.com/img/magtop/banner/b_speed188.gif" alt="" class="w-[300px]">
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
    <section>
      <div class="lg:py-20 py-12 px-4 flex lg:flex-row flex-col justify-center items-center lg:gap-24 gap-4 bg-[#FFD8B2]">
        <div class="flex flex-col max-w-[1240px] gap-4">
          <h2 class="text-mag2-6xl leading-[150%] font-bold">誰でも無料で発行できます</h2>
          <div class="leading-[160%]">メルマガ発行料金は「無料メルマガ」「有料メルマガ」<br>
              どちらも０円なので、気軽に今すぐ始められます。<br>
              初期費用、技術費、デザイン費は一切かかりません。</div>
        </div>
          <a href="" class="flex justify-center items-center gap-2 max-w-[400px] w-full text-white h-14 rounded-full border border-sumi-900 transition-[padding] duration-150ms hover:p-1">
            <div class="bg-sumi-900 flex justify-center items-center w-full h-full rounded-full ">
              <div>まぐまぐで発行する</div>
              <div>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>send_plane_line</title><g id="send_plane_line" fill='none'><path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/><path fill='#FFFFFFFF' d='M20.25 3.532a1 1 0 0 1 1.183 1.329l-6 15.5a1 1 0 0 1-1.624.362l-3.382-3.235-1.203 1.202c-.636.636-1.724.186-1.724-.714v-3.288L2.309 9.723a1 1 0 0 1 .442-1.691l17.5-4.5Zm-2.114 4.305-7.998 6.607 3.97 3.798zm-1.578-1.29L4.991 9.52l3.692 3.53 7.875-6.505Z'/></g></svg>
              </div>
            </div>
          </a>
      </div>
    </section>
    <section>
      <div class="py-34 px-4 flex flex-col items-center">
        <div class="flex flex-col max-w-[1240px] w-full gap-40">
          <section class="flex lg:flex-row flex-col-reverse justify-between items-center gap-4">
            <div class="flex gap-4 bg-[url(@/assets/img/bg-triangle.svg)] bg-no-repeat bg-left-bottom pl-4 pb-4 pr-4 lg:pr-0 w-full overflow-hidden">
              <div class="w-fit"><img src="@/assets/img/top-sample-screen01.png" alt="" class="lg:max-w-[300px] w-full"></div>
              <div class="w-fit"><img src="@/assets/img/top-sample-screen02.png" alt="" class="lg:max-w-[300px] w-full"></div>
            </div>
            <div class=" lg:max-w-[400px] w-full flex flex-col gap-8 lg:gap-12 pb-8 ">
              <div class="flex items-center gap-2">
                <div class="h-8 w-8 bg-[#FF6B6B] rounded-full border aspect-square"></div>
                <div class="h-8 w-8 bg-[#FFB366] rounded-full border aspect-square"></div>
                <p class="font-bold">コンテンツ発信サービス「まぐまぐ」</p>
              </div>
              <h2 class="text-mag2-6xl leading-[135%] font-bold">
                コンテンツイメージ
              </h2>
              <div>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br>
                テキストテキストテキストテキスト
              </div>
              <div class="flex  justify-center">
              <a href="" class="flex justify-center items-center gap-2 max-w-[400px] w-full text-white h-14 rounded-full border border-sumi-900 transition-[padding] duration-150ms hover:p-1">
                <div class="bg-sumi-900 flex justify-center items-center w-full h-full rounded-full ">
                  <div>機能について詳しく知る</div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M400-320q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm-42-212-57-56q-12-12-28-12t-28 12q-12 12-12.5 28t11.5 28l85 85q12 12 28.5 12t28.5-12l170-169q12-12 12-28.5T556-673q-12-12-28.5-12T499-673L358-532Zm42 292q-134 0-227-93T80-560q0-134 93-227t227-93q134 0 227 93t93 227q0 56-17.5 105.5T653-364l199 199q12 12 12 28.5T852-108q-12 12-28.5 12T795-108L596-307q-41 32-90.5 49.5T400-240Zm0-320Z"/></svg>                  </div>
                </div>
              </a>
              </div>
            </div>
          </section>
          <section class="flex flex-col justify-between items-center w-full gap-20">
            <div class="flex justify-between items-center w-full gap-6 md:flex-row flex-col">
              <div>
                <img src="@/assets/img/top-ilustration01.png" alt="" class="max-w-[400px] rounded-md w-full">
              </div>
              <div class="max-w-[600px] flex flex-col gap-4">
                <h3 class="sm:text-mag2-6xl text-mag2-5xl leading-[150%] font-bold md:text-left text-center">あなたが書いた記事の著作権は<br class="lg:block hidden">すべてあなたに帰属します</h3>
                <p>記事の書き換えやあなたに無断で記事を掲載することはありません。<br>書いた記事はあなたの自由にできます。</p>
                <a href="" class="text-light-mode underline hover:opacity-70">まぐまぐで発行する→</a>
              </div>
            </div>
            <div class="flex justify-between items-center w-full gap-6 md:flex-row flex-col-reverse">
              <div class="max-w-[600px] flex flex-col gap-4">
                <h3 class="sm:text-mag2-6xl text-mag2-5xl leading-[150%] font-bold md:text-left text-center">読者やファンを増やす</h3>
                <p>読者増加のための支援として対談の設定、Webメディアへの展開等読者を増やすためのサポートも行います。読者を増やしたいときはお気軽にご相談ください。</p>
                <a href="" class="text-light-mode underline hover:opacity-70">まぐまぐで発行する→</a>
              </div>
              <div>
                <img src="@/assets/img/top-ilustration02.png" alt="" class="max-w-[400px] rounded-md w-full">
              </div>
            </div>
            <div class="flex justify-between items-center w-full gap-6 md:flex-row flex-col">
              <div>
                <img src="@/assets/img/top-ilustration03.png" alt="" class="max-w-[400px] rounded-md w-full">
              </div>
              <div class="max-w-[600px] flex flex-col gap-4">
                <h3 class="sm:text-mag2-6xl text-mag2-5xl leading-[150%] font-bold md:text-left text-center">あなた専用のサポートで<br>集中できる時間を増やす</h3>
                <p>受信設定案内などの読者サポートはもちろん、配送方法などの発行者サポートもいたします。<br>技術支援などのその他サポートはお任せいただき記事の作成に集中いただけます。</p>
                <a href="" class="text-light-mode underline hover:opacity-70">まぐまぐで発行する→</a>
              </div>
            </div>
          </section>
          <section>
            <div class="flex flex-col gap-4">
              <h2 class="text-mag2-6xl font-bold text-center leading-[150%]">書き手の声</h2>
              <div class="flex gap-4 justify-center">
                <div class="flex flex-col gap-4 max-w-[500px] w-full p-8 border border-sumi-200 rounded-md bg-white">
                  <div class="flex gap-6 items-center">
                    <div class="w-14 h-14 min-w-14 min-h-14 aspect-square rounded-full overflow-hidden object-cover">
                      <img src="https://placehold.jp/56x56.png" alt="" class="object-cover">
                    </div>
                    <div>
                      <div class="font-bold line-clamp-2">記事の価値がわかる収益モデル</div>
                    </div>
                  </div>
                  <div  class="leading-[160%]">
                    フリーのライター収入は記事1本あたり1.5万円、月に20記事以上書いて30~40万と言われています。
                    まぐまぐのモデルでは毎月600円払う読者が1,000人いれば30万円の報酬になります。毎月発行する記事の数や価格は自分で決められます。
                  </div>
                </div>
                <div class="flex flex-col gap-4 max-w-[500px] w-full p-8 border border-sumi-200 rounded-md bg-white">
                  <div class="flex gap-6 items-center">
                    <div class="w-14 h-14 min-w-14 min-h-14 aspect-square rounded-full overflow-hidden object-cover">
                      <img src="https://placehold.jp/56x56.png" alt="" class="object-cover">
                    </div>
                    <div>
                      <div class="font-bold line-clamp-2">記事の価値がわかる収益モデル</div>
                    </div>
                  </div>
                  <div  class="leading-[160%]">
                    フリーのライター収入は記事1本あたり1.5万円、月に20記事以上書いて30~40万と言われています。
                    まぐまぐのモデルでは毎月600円払う読者が1,000人いれば30万円の報酬になります。毎月発行する記事の数や価格は自分で決められます。
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div class="flex flex-col max-w-[1240px] w-full gap-10">
              <h2 class="text-mag2-6xl font-bold text-center leading-[150%]">認知度を上げるためのStep</h2>
              <div class="flex gap-6 md:flex-row flex-col">
                <div class="flex flex-col gap-6 flex-1">
                    <div class="text-mag2-2xl p-4 rounded-md border border-[#222] bg-[#FFB366] md:w-full w-fit">
                      step1
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <div class="h-4 w-4 bg-[#FFB366] rounded-full aspect-square"></div>
                        <h3 class="text-mag2-5xl font-bold leading-[150%]">アカウント登録</h3>
                      </div>
                    </div>
                    <div class="mag2-xl leading-[160%]">
                      まずは会員登録をしてアカウントを作成しましょう！
                    </div>
                </div>
                <div class="flex flex-col gap-6 flex-1">
                    <div class="text-mag2-2xl p-4 rounded-md border border-[#222] bg-[#B8C5FF] md:w-full w-fit">
                      step2
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <div class="h-4 w-4 bg-[#B8C5FF] rounded-full aspect-square"></div>
                        <h3 class="text-mag2-5xl font-bold leading-[150%]">新規メルマガ発行</h3>
                      </div>
                    </div>
                    <div class="mag2-xl leading-[160%]">
                      メルマガ発行申請では、発行者情報やマガジン情報、発行周期、 ご自身のWebサイトなどをご登録いただきます。 （ 登録料・年会費等は一切かかりません。 ）
                    </div>
                </div>
                <div class="flex flex-col gap-6 flex-1">
                    <div class="text-mag2-2xl p-4 rounded-md border border-[#222] bg-[#98E4D6] md:w-full w-fit">
                      step3
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <div class="h-4 w-4 bg-[#98E4D6] rounded-full aspect-square"></div>
                        <h3 class="text-mag2-5xl font-bold leading-[150%]">SNSや動画で告知や対談</h3>
                      </div>
                    </div>
                    <div class="mag2-xl leading-[160%]">
                      無料メルマガは発行申請後、そのまま発行可能となります。申請いただいたメルマガが発行承認されますと、メルマガの登録申込ページが生成され メルマガの発行が可能になります。<br>
                      <br>
                      ※初月有料メルマガは、発行前に売上受取用の口座情報をマイページから設定してください。
                    </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div class="flex flex-col max-w-[1240px] w-full gap-10">
              <h2 class="text-mag2-6xl font-bold text-center leading-[150%]"> Youtube 対談</h2>
              <div class="flex justify-center gap-4">
                <div class="flex flex-col shadow-md block rounded-sm overflow-hidden bg-white max-w-[500px] hover:bg-sumi-50 group">
                  <div class="aspect-16/9 youtube group-has-hover:scale-95  transition-[scale] duration-150ms group-has-hover:rounded-sm overflow-hidden backface-hidden" >
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Wo5kw-dCYI8?si=kqVJc7Aw0DqfXIJH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                  <a href="https://youtu.be/Wo5kw-dCYI8" target="_blank" class="p-4 text-mag2-2xl leading-[150%] font-bold"><div class=" line-clamp-2">【中島聡 × 田中渓】AIの未来と日本企業のポテンシャル （後編）</div></a>
                </div>
                <div class="flex flex-col shadow-md block rounded-sm overflow-hidden bg-white max-w-[500px] hover:bg-sumi-50 group">
                  <div class="aspect-16/9 youtube group-has-hover:scale-95  transition-[scale] duration-150ms group-has-hover:rounded-sm overflow-hidden backface-hidden" >
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/zl_NxyBZtAY?si=L67O_68fkxVVpF5K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                  <a href="https://youtu.be/zl_NxyBZtAY" target="_blank" class="p-4 text-mag2-2xl leading-[150%] font-bold"><div class=" line-clamp-2">【中島聡 × 田中渓】AIの未来と日本企業のポテンシャル （後編）【中島聡 × 田中渓】AIの未来と日本企業のポテンシャル （後編）</div></a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
    <section>
      <div class="flex">
        <div class="flex lg:flex-row flex-col flex-1 justify-between">
          <div class="flex justify-end flex-1 px-6 py-10 lg:px-10 lg:py-20 bg-[url(@/assets/img/top-model-bg01.png)] bg-cover text-white">
            <div class="flex flex-col max-w-[500px] flex-1 gap-4">
              <div class="rounded-full bg-[#98E4D6] p-1 w-fit h-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 41" fill="none">  <g clip-path="url(#clip0_3751_14965)"><path d="M6.66667 6.70215C7.07489 6.7022 7.46889 6.85208 7.77395 7.12334C8.07901 7.39461 8.2739 7.7684 8.32167 8.17381L8.33333 8.36882V30.0355H33.3333C33.7581 30.036 34.1667 30.1986 34.4756 30.4902C34.7845 30.7818 34.9704 31.1804 34.9953 31.6045C35.0202 32.0285 34.8822 32.4461 34.6096 32.7719C34.3369 33.0976 33.9502 33.307 33.5283 33.3571L33.3333 33.3688H6.66667C6.25844 33.3688 5.86444 33.2189 5.55938 32.9476C5.25432 32.6764 5.05943 32.3026 5.01167 31.8971L5 31.7021V8.36882C5 7.92679 5.17559 7.50286 5.48816 7.1903C5.80072 6.87774 6.22464 6.70215 6.66667 6.70215ZM33.6567 11.3988C35.1567 11.3988 35.9067 13.2121 34.8467 14.2721L25.5633 23.5555C25.2196 23.899 24.7535 24.0919 24.2675 24.0919C23.7815 24.0919 23.3154 23.899 22.9717 23.5555L18.375 18.9588L12.4833 24.8505C12.1708 25.1632 11.7469 25.339 11.3048 25.3392C10.8626 25.3393 10.4386 25.1638 10.1258 24.8513C9.8131 24.5388 9.63732 24.1149 9.63716 23.6727C9.63701 23.2306 9.81249 22.8065 10.125 22.4938L17.0783 15.5405C17.2486 15.3702 17.4507 15.235 17.6732 15.1428C17.8957 15.0507 18.1342 15.0032 18.375 15.0032C18.6158 15.0032 18.8543 15.0507 19.0768 15.1428C19.2993 15.235 19.5014 15.3702 19.6717 15.5405L24.2683 20.1371L29.6717 14.7321H28.9817C28.5396 14.7321 28.1157 14.5566 27.8032 14.244C27.4906 13.9314 27.315 13.5075 27.315 13.0655C27.315 12.6235 27.4906 12.1995 27.8032 11.887C28.1157 11.5744 28.5396 11.3988 28.9817 11.3988H33.6567Z" fill="#222222"/></g><defs><clipPath id="clip0_3751_14965"><rect width="40" height="40" fill="white" transform="translate(0 0.0351562)"/></clipPath></defs></svg>
              </div>
              <h3 class="text-mag2-5xl leading-[150%] font-bold">記事の価値がわかる収益モデル</h3>
              <div class="leading-[160%]">
                フリーのライター収入は記事1本あたり1.5万円、月に20記事以上書いて30~40万と言われています。<br>
                まぐまぐのモデルでは毎月600円払う読者が1,000人いれば30万円の報酬になります。毎月発行する記事の数や価格は自分で決められます。
              </div>
            </div>
          </div>
          <div class="flex justify-start flex-1 px-6 py-10 lg:px-10 lg:py-20 bg-[url(@/assets/img/top-model-bg02.png)] bg-cover text-white">
            <div class="flex flex-col max-w-[500px] flex-1 gap-4">
              <div class="rounded-full bg-[#98E4D6] p-1 w-fit h-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 41" fill="none"><path d="M20 5.03516C23.8567 5.03516 27.4267 5.71516 30.0967 6.88349C31.4283 7.46682 32.6117 8.20349 33.4833 9.10682C34.2917 9.94016 34.8917 10.9868 34.9867 12.2002L35 12.5352V29.2018C35 30.5585 34.365 31.7185 33.4833 32.6302C32.6117 33.5335 31.4283 34.2702 30.0967 34.8535C27.4267 36.0202 23.8567 36.7018 20 36.7018C16.1433 36.7018 12.5733 36.0218 9.90333 34.8535C8.57167 34.2702 7.38833 33.5335 6.51667 32.6302C5.70833 31.7968 5.10833 30.7502 5.01333 29.5368L5 29.2018V12.5352C5 11.1785 5.635 10.0185 6.51667 9.10682C7.38833 8.20349 8.57167 7.46682 9.90333 6.88349C12.5733 5.71682 16.1433 5.03516 20 5.03516ZM31.6667 25.7135C31.1614 26.0162 30.637 26.2857 30.0967 26.5202C27.4267 27.6868 23.8567 28.3685 20 28.3685C16.1433 28.3685 12.5733 27.6885 9.90333 26.5202C9.36301 26.2857 8.83856 26.0162 8.33333 25.7135V29.2018C8.33333 29.4552 8.44333 29.8285 8.91333 30.3135C9.39 30.8068 10.16 31.3268 11.24 31.8002C13.3967 32.7435 16.4917 33.3685 20 33.3685C23.5083 33.3685 26.6033 32.7435 28.76 31.8002C29.84 31.3268 30.61 30.8068 31.0867 30.3135C31.5567 29.8302 31.6667 29.4552 31.6667 29.2018V25.7135ZM31.6667 17.3802C31.1614 17.6829 30.637 17.9523 30.0967 18.1868C27.4267 19.3535 23.8567 20.0352 20 20.0352C16.1433 20.0352 12.5733 19.3552 9.90333 18.1868C9.36301 17.9524 8.83856 17.6829 8.33333 17.3802V20.8685C8.33333 21.1218 8.44333 21.4952 8.91333 21.9802C9.39 22.4735 10.16 22.9935 11.24 23.4668C13.3967 24.4102 16.4917 25.0352 20 25.0352C23.5083 25.0352 26.6033 24.4102 28.76 23.4668C29.84 22.9935 30.61 22.4735 31.0867 21.9802C31.5567 21.4968 31.6667 21.1218 31.6667 20.8685V17.3802ZM20 8.36849C16.4917 8.36849 13.3967 8.99349 11.24 9.93682C10.16 10.4102 9.39 10.9302 8.91333 11.4235C8.44333 11.9068 8.33333 12.2818 8.33333 12.5352C8.33333 12.7885 8.44333 13.1618 8.91333 13.6468C9.39 14.1402 10.16 14.6602 11.24 15.1335C13.3967 16.0768 16.4917 16.7018 20 16.7018C23.5083 16.7018 26.6033 16.0768 28.76 15.1335C29.84 14.6602 30.61 14.1402 31.0867 13.6468C31.5567 13.1635 31.6667 12.7885 31.6667 12.5352C31.6667 12.2818 31.5567 11.9085 31.0867 11.4235C30.61 10.9302 29.84 10.4102 28.76 9.93682C26.6033 8.99349 23.5083 8.36849 20 8.36849Z" fill="#222222"/></svg>
              </div>
              <h3 class="text-mag2-5xl leading-[150%] font-bold">あなたの記事はあなたの資産です</h3>
              <div class="leading-[160%]">
                書いた記事をバックナンバーとして公開すると、新しくあなたを知った読者も過去の記事を購入することができます。
                さらにあなたが書いた記事は自由に書籍化やポートフォリオへ追加など、他のメディアへ展開できます。
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section>
      <div class="pt-34 pb-52 px-4 flex flex-col items-center">
        <div class="flex flex-col max-w-[1240px] items-center w-full gap-40">
          <section class="flex flex-col items-center gap-4">
            <h2 class="text-mag2-6xl leading-[150%] font-bold align-center">収益イメージ</h2>
              <div class="flex gap-4 justify-center">
                <div class="flex flex-col gap-8 w-full p-8 border border-sumi-200 rounded-md bg-white">
                  <div class="flex gap-6 items-center">
                    <div class="w-14 h-14 min-w-14 min-h-14 aspect-square rounded-full overflow-hidden object-cover">
                      <img src="https://placehold.jp/56x56.png" alt="" class="object-cover">
                    </div>
                    <div>
                      <div class="text-mag2-4xl font-bold line-clamp-2 leading-[150%]">Aさんの場合</div>
                    </div>
                  </div>
                  <div class="flex flex-col gap-2">
                    <div class="border border-sumi-400 px-2 w-fit rounded-full">記事数<span class="font-normal text-mag2-base">(月)</span></div>
                    <div class="text-mag2-3xl font-bold">９本</div>
                    <div class="border border-sumi-400 px-2 w-fit rounded-full">収益<span class="font-normal text-mag2-base">(月)</span></div>
                    <div class="text-mag2-3xl font-bold">
                      24万円<br>
                      <span class="font-normal text-mag2-base">(定期購読者 9万/ バックナンバー15万)</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-8 w-full p-8 border border-sumi-200 rounded-md bg-white">
                  <div class="flex gap-6 items-center">
                    <div class="w-14 h-14 min-w-14 min-h-14 aspect-square rounded-full overflow-hidden object-cover">
                      <img src="https://placehold.jp/56x56.png" alt="" class="object-cover">
                    </div>
                    <div>
                      <div class="text-mag2-4xl font-bold line-clamp-2 leading-[150%]">Aさんの場合</div>
                    </div>
                  </div>
                  <div class="flex flex-col gap-2">
                    <div class="border border-sumi-400 px-2 w-fit rounded-full">記事数<span class="font-normal text-mag2-base">(月)</span></div>
                    <div class="text-mag2-3xl font-bold">９本</div>
                    <div class="border border-sumi-400 px-2 w-fit rounded-full">収益<span class="font-normal text-mag2-base">(月)</span></div>
                    <div class="text-mag2-3xl font-bold">
                      24万円<br>
                      <span class="font-normal text-mag2-base">(定期購読者 9万/ バックナンバー15万)</span>
                    </div>
                  </div>
                </div>                <div class="flex flex-col gap-8 w-full p-8 border border-sumi-200 rounded-md bg-white">
                  <div class="flex gap-6 items-center">
                    <div class="w-14 h-14 min-w-14 min-h-14 aspect-square rounded-full overflow-hidden object-cover">
                      <img src="https://placehold.jp/56x56.png" alt="" class="object-cover">
                    </div>
                    <div>
                      <div class="text-mag2-4xl font-bold line-clamp-2 leading-[150%]">Aさんの場合</div>
                    </div>
                  </div>
                  <div class="flex flex-col gap-2">
                    <div class="border border-sumi-400 px-2 w-fit rounded-full">記事数<span class="font-normal text-mag2-base">(月)</span></div>
                    <div class="text-mag2-3xl font-bold">９本</div>
                    <div class="border border-sumi-400 px-2 w-fit rounded-full">収益<span class="font-normal text-mag2-base">(月)</span></div>
                    <div class="text-mag2-3xl font-bold">
                      24万円<br>
                      <span class="font-normal text-mag2-base">(定期購読者 9万/ バックナンバー15万)</span>
                    </div>
                  </div>
                </div>
              </div>
          </section>
          <section class="flex flex-col items-center max-w-[800px] gap-4">
            <h2 class="text-mag2-6xl leading-[150%] font-bold align-center">収益イメージ</h2>
              <div class="flex flex-col gap-4 justify-center">
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                <div><img src="https://placehold.jp/1600x900.png" alt=""></div>
              </div>
          </section>
          <section  class="flex flex-col items-center max-w-[800px] gap-4">
            <div class="flex flex-col w-full gap-10">
              <h2 class="text-mag2-6xl font-bold text-center leading-[150%]">認知度を上げるためのStep</h2>
              <div class="flex flex-col gap-6">
                <div class="flex flex gap-6 flex-1">
                  <div class="flex text-mag2-2xl p-4 rounded-md border border-[#222] bg-[#FFB366]">
                     <div class="flex items-center">step1</div>
                  </div>
                  <div class="flex flex-col gap-2">
                    <div class="flex items-center gap-2">
                      <div class="h-4 w-4 bg-[#FFB366] rounded-full aspect-square"></div>
                      <h3 class="text-mag2-5xl font-bold leading-[120%]">アカウント登録</h3>
                    </div>
                    <div class="mag2-xl leading-[160%]">
                      まずは会員登録をしてアカウントを作成しましょう！
                    </div>
                  </div>
                </div>
                <div class="flex gap-6 flex-1">
                    <div class="flex text-mag2-2xl p-4 rounded-md border border-[#222] bg-[#B8C5FF]">
                      <div class="flex items-center ">step2</div>
                    </div>
                    <div class="flex flex-col gap-2">
                      <div class="flex items-center gap-2">
                        <div class="h-4 w-4 bg-[#B8C5FF] rounded-full aspect-square"></div>
                        <h3 class="text-mag2-5xl font-bold leading-[120%]">新規メルマガ発行</h3>
                      </div>
                      <div class="mag2-xl leading-[160%]">
                        メルマガ発行申請では、発行者情報やマガジン情報、発行周期、 ご自身のWebサイトなどをご登録いただきます。 （ 登録料・年会費等は一切かかりません。 ）
                      </div>
                    </div>
                </div>
                <div class="flex  gap-6 flex-1">
                    <div class="flex text-mag2-2xl p-4 rounded-md border border-[#222] bg-[#98E4D6]">
                      <div class="flex items-center ">step3</div>
                    </div>

                    <div class="flex flex-col gap-2">
                      <div class="flex items-center gap-2">
                        <div class="h-4 w-4 bg-[#98E4D6] rounded-full aspect-square"></div>
                        <h3 class="text-mag2-5xl font-bold leading-[120%]">SNSや動画で告知や対談</h3>
                      </div>
                    <div class="mag2-xl leading-[160%]">
                      無料メルマガは発行申請後、そのまま発行可能となります。申請いただいたメルマガが発行承認されますと、メルマガの登録申込ページが生成され メルマガの発行が可能になります。<br>
                      <br>
                      ※初月有料メルマガは、発行前に売上受取用の口座情報をマイページから設定してください。
                    </div>
                  </div>

                </div>
              </div>
              <div class="text-center">
                ※無料メルマガ、有料メルマガの発行までの流れは若干異なります。<br>
                詳しくは申請画面にてご確認ください。<br>
                ※発行申請前にお読みください→ <a href="" class="text-light-mode underline hover:opacity-70"> 【重要】まぐまぐ！メルマガ発行ガイドライン</a>
              </div>
            </div>
          </section>
          <section  class="flex flex-col items-center max-w-[800px] gap-4 w-full">
            <div class="flex flex-col w-full gap-10">
              <h2 class="text-mag2-6xl font-bold text-center leading-[150%]">
                よくある質問
              </h2>
              <div class="flex flex-col gap-4">
                <details class="w-full rounded-sm overflow-hidden border border-[#222] open:[&_svg]:rotate-90">
                  <summary class="leading-[150%] gap-2 w-full p-4 bg-[#E8E8EB] marker:hidden marker:content-[''] flex justify-between items-center">
                    <div class="flex-1">発行に料金はかかりますか？</div>
                    <svg class="duration-150 w-6" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222"><path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"/></svg>
                  </summary>
                  <div class=" p-4">
                    無料メルマガ、有料メルマガどちらも、どなたでも無料でご利用いただけます。なお、有料メルマガは売上の50％が発行者の収入となります。残り50％は、まぐまぐ！のプラットフォーム利用料としていただきます。
                  </div>
                </details>
                <details class="w-full rounded-sm overflow-hidden border border-[#222] open:[&_svg]:rotate-90">
                  <summary class="leading-[150%] gap-2 w-full p-4 bg-[#E8E8EB] marker:hidden marker:content-[''] flex justify-between items-center">
                    <div class="flex-1">発行にはどのぐらい時間が掛かりますか？</div>
                    <svg class="duration-150 w-6" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222"><path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"/></svg>
                  </summary>
                  <div class=" p-4">
                    無料メルマガ、有料メルマガどちらも、どなたでも無料でご利用いただけます。なお、有料メルマガは売上の50％が発行者の収入となります。残り50％は、まぐまぐ！のプラットフォーム利用料としていただきます。
                  </div>
                </details>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  <mag2Footer />
  </div>
</template>

<script>

</script>

<script setup lang="ts">
const title = ref('まぐまぐ')
const subTitle = ref('読みたいメルマガ、きっと見つかる。')
const description = ref('日本初・世界最大級のメールマガジン (メルマガ)ポータル。ビジネス利用から個人の趣味まで、無料で登録・発行！パソコンひとつで誰でもカンタンに情報発信できます。発行者向け支援サービスも充実していますので安心です。')
useHead({
  meta: [
    { name: 'description', content: description }
  ],
  title: '%title %separator %siteName',
  templateParams: {
    title: title,
    siteName: subTitle,
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
/* Tailwind またはお好みのスタイルを有効化しておいてください */
</style>