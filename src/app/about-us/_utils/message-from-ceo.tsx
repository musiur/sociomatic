import { E_FormTypes } from "@/app/joining/_utils/types";

const MessageFromCEO = ({
  searchParams,
}: {
  searchParams: { type: E_FormTypes };
}) => {
  let data = PageData.googleads;
  if (searchParams.type && Object.keys(PageData)?.includes(searchParams.type)) {
    // @ts-ignore
    data = PageData[searchParams.type];
  }

  const { title, paragraphs } = data;
  return (
    <div>
      <div className="space-y-8">
        <div className="min-h-[320px] bg-gray-200 rounded-xl"></div>
        <h2 className="text-gray-400 [&>span]:text-primary [&>span]:mx-3">
          {title}
        </h2>
        <ul className="space-y-4">
          {paragraphs.map((paragraph, index) => (
            <li
              key={index}
              className="leading-loose text-gray-600 [&>span]:font-medium [&>span]:mx-1"
            >
              {paragraph}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MessageFromCEO;

const PageData = {
  googleads: {
    id: 1,
    title: (
      <>
        Hey there! First off, a huge
        <span>thanks on considering Sociomatic</span>
        for your Google Ads Management Needs
      </>
    ),
    paragraphs: [
      <>
        Now you&apos;re on the application page... (we can all take a deep
        breath together here) ... and maybe a few questions are swirling in your
        mind:
        <span>
          Is Sociomatic the right fit for me? Can my business truly achieve
          success with Google Ads?
        </span>
      </>,
      <>
        <span>Believe us, you&apos;re not alone.</span> Many who&apos;ve joined
        our <span>Google Ads management service</span> (and seen amazing
        results) felt the exact same way. It&apos;s totally normal to have
        doubts.
      </>,
      <>
        <span>But here&apos;s the thing: </span> Sociomatic is built to take the
        reins of your Google Ads campaigns, allowing you to focus on what you do
        best - running your business. Our team of
        <span>
          Google Ads experts will handle the strategy, optimization, and
          campaign management, ensuring your ads reach the right audience and
          deliver powerful results
        </span>
      </>,
      <>
        <span>
          Before you submit your application, take a moment to watch the short
          video above.
        </span>
        It features real businesses, just like yours, who saw amazing results by
        letting Sociomatic handle their Google Ads. Their success stories can be
        your inspiration!
      </>,
      <>
        Watch the video, and then fill out that application with a surge of
        confidence! Sociomatic is designed for YOU, and we&apos;re here to help
        you succeed.
      </>,
      <>
        <span>Onwards and Upwards!</span>
      </>,
      <>
        P.S. We&apos;re not just saying that! Check out our stellar client
        <span>testimonials</span> - you won&apos;t be disappointed!
      </>,
      <>Sincerely,</>,
      <>
        Yeatiq
        <br />
        CEO | Top Rated Seller
      </>,
    ],
  },
  googleanalytics: {
    id: 2,
    title: (
      <>
        Hey there! First off, a huge
        <span>thanks on considering Sociomatic</span>
        for your Google Analytics Management Needs
      </>
    ),
    paragraphs: [
      <>
        Now you&apos;re on the application page... (we can all take a deep
        breath together here) ... and maybe a few questions are swirling in your
        mind:
        <span>
          Is Sociomatic the right fit for me? Can my business truly achieve
          success with Google Analytics?
        </span>
      </>,
      <>
        <span>Believe us, you&apos;re not alone.</span> Many who&apos;ve joined
        our <span>Google Analytics management service</span> (and seen amazing
        results) felt the exact same way. It&apos;s totally normal to have
        doubts.
      </>,
      <>
        <span>But here&apos;s the thing: </span> Sociomatic is built to take the
        reins of your Google Analytics campaigns, allowing you to focus on what
        you do best - running your business. Our team of
        <span>
          Google Analytics experts will handle the strategy, optimization, and
          campaign management, ensuring your ads reach the right audience and
          deliver powerful results
        </span>
      </>,
      <>
        <span>
          Before you submit your application, take a moment to watch the short
          video above.
        </span>
        It features real businesses, just like yours, who saw amazing results by
        letting Sociomatic handle their Google Analytics. Their success stories
        can be your inspiration!
      </>,
      <>
        Watch the video, and then fill out that application with a surge of
        confidence! Sociomatic is designed for YOU, and we&apos;re here to help
        you succeed.
      </>,
      <>
        <span>Onwards and Upwards!</span>
      </>,
      <>
        P.S. We&apos;re not just saying that! Check out our stellar client
        <span>testimonials</span> - you won&apos;t be disappointed!
      </>,
      <>Sincerely,</>,
      <>
        Yeatiq
        <br />
        CEO | Top Rated Seller
      </>,
    ],
  },
  socialmediapaidads: {
    id: 3,
    title: (
      <>
        Hey there! First off, a huge
        <span>thanks on considering Sociomatic</span>
        for your Social Media Paid Ads Management Needs
      </>
    ),
    paragraphs: [
      <>
        Now you&apos;re on the application page... (we can all take a deep
        breath together here) ... and maybe a few questions are swirling in your
        mind:
        <span>
          Is Sociomatic the right fit for me? Can my business truly achieve
          success with Social Media Paid Ads?
        </span>
      </>,
      <>
        <span>Believe us, you&apos;re not alone.</span> Many who&apos;ve joined
        our <span>Social Media Paid Ads management service</span> (and seen
        amazing results) felt the exact same way. It&apos;s totally normal to
        have doubts.
      </>,
      <>
        <span>But here&apos;s the thing: </span> Sociomatic is built to take the
        reins of your Social Media Paid Ads campaigns, allowing you to focus on
        what you do best - running your business. Our team of
        <span>
          Social Media Paid Ads experts will handle the strategy, optimization,
          and campaign management, ensuring your ads reach the right audience
          and deliver powerful results
        </span>
      </>,
      <>
        <span>
          Before you submit your application, take a moment to watch the short
          video above.
        </span>
        It features real businesses, just like yours, who saw amazing results by
        letting Sociomatic handle their Social Media Paid Ads. Their success
        stories can be your inspiration!
      </>,
      <>
        Watch the video, and then fill out that application with a surge of
        confidence! Sociomatic is designed for YOU, and we&apos;re here to help
        you succeed.
      </>,
      <>
        <span>Onwards and Upwards!</span>
      </>,
      <>
        P.S. We&apos;re not just saying that! Check out our stellar client
        <span>testimonials</span> - you won&apos;t be disappointed!
      </>,
      <>Sincerely,</>,
      <>
        Yeatiq
        <br />
        CEO | Top Rated Seller
      </>,
    ],
  },
  uiux: {
    id: 4,
    title: (
      <>
        Hey there! First off, a huge
        <span>thanks on considering Sociomatic</span>
        for your UI/UX Management Needs
      </>
    ),
    paragraphs: [
      <>
        Now you&apos;re on the application page... (we can all take a deep
        breath together here) ... and maybe a few questions are swirling in your
        mind:
        <span>
          Is Sociomatic the right fit for me? Can my business truly achieve
          success with UI/UX?
        </span>
      </>,
      <>
        <span>Believe us, you&apos;re not alone.</span> Many who&apos;ve joined
        our <span>UI/UX management service</span> (and seen amazing results)
        felt the exact same way. It&apos;s totally normal to have doubts.
      </>,
      <>
        <span>But here&apos;s the thing: </span> Sociomatic is built to take the
        reins of your UI/UX campaigns, allowing you to focus on what you do best
        - running your business. Our team of
        <span>
          UI/UX experts will handle the strategy, optimization, and campaign
          management, ensuring your ads reach the right audience and deliver
          powerful results
        </span>
      </>,
      <>
        <span>
          Before you submit your application, take a moment to watch the short
          video above.
        </span>
        It features real businesses, just like yours, who saw amazing results by
        letting Sociomatic handle their UI/UX. Their success stories can be your
        inspiration!
      </>,
      <>
        Watch the video, and then fill out that application with a surge of
        confidence! Sociomatic is designed for YOU, and we&apos;re here to help
        you succeed.
      </>,
      <>
        <span>Onwards and Upwards!</span>
      </>,
      <>
        P.S. We&apos;re not just saying that! Check out our stellar client
        <span>testimonials</span> - you won&apos;t be disappointed!
      </>,
      <>Sincerely,</>,
      <>
        Yeatiq
        <br />
        CEO | Top Rated Seller
      </>,
    ],
  },
  customwebdev: {
    id: 5,
    title: (
      <>
        Hey there! First off, a huge
        <span>thanks on considering Sociomatic</span>
        for your Custom Web Development Management Needs
      </>
    ),
    paragraphs: [
      <>
        Now you&apos;re on the application page... (we can all take a deep
        breath together here) ... and maybe a few questions are swirling in your
        mind:
        <span>
          Is Sociomatic the right fit for me? Can my business truly achieve
          success with Custom Web Development?
        </span>
      </>,
      <>
        <span>Believe us, you&apos;re not alone.</span> Many who&apos;ve joined
        our <span>Custom Web Development management service</span> (and seen
        amazing results) felt the exact same way. It&apos;s totally normal to
        have doubts.
      </>,
      <>
        <span>But here&apos;s the thing: </span> Sociomatic is built to take the
        reins of your Custom Web Development campaigns, allowing you to focus on
        what you do best - running your business. Our team of
        <span>
          Custom Web Development experts will handle the strategy, optimization,
          and campaign management, ensuring your ads reach the right audience
          and deliver powerful results
        </span>
      </>,
      <>
        <span>
          Before you submit your application, take a moment to watch the short
          video above.
        </span>
        It features real businesses, just like yours, who saw amazing results by
        letting Sociomatic handle their Custom Web Development. Their success
        stories can be your inspiration!
      </>,
      <>
        Watch the video, and then fill out that application with a surge of
        confidence! Sociomatic is designed for YOU, and we&apos;re here to help
        you succeed.
      </>,
      <>
        <span>Onwards and Upwards!</span>
      </>,
      <>
        P.S. We&apos;re not just saying that! Check out our stellar client
        <span>testimonials</span> - you won&apos;t be disappointed!
      </>,
      <>Sincerely,</>,
      <>
        Yeatiq
        <br />
        CEO | Top Rated Seller
      </>,
    ],
  },
  software: {
    id: 6,
    title: (
      <>
        Hey there! First off, a huge
        <span>thanks on considering Sociomatic</span>
        for your Software Development Management Needs
      </>
    ),
    paragraphs: [
      <>
        Now you&apos;re on the application page... (we can all take a deep
        breath together here) ... and maybe a few questions are swirling in your
        mind:
        <span>
          Is Sociomatic the right fit for me? Can my business truly achieve
          success with Software Development?
        </span>
      </>,
      <>
        <span>Believe us, you&apos;re not alone.</span> Many who&apos;ve joined
        our <span>Software Development management service</span> (and seen
        amazing results) felt the exact same way. It&apos;s totally normal to
        have doubts.
      </>,
      <>
        <span>But here&apos;s the thing: </span> Sociomatic is built to take the
        reins of your Software Development campaigns, allowing you to focus on
        what you do best - running your business. Our team of
        <span>
          Software Development experts will handle the strategy, optimization,
          and campaign management, ensuring your ads reach the right audience
          and deliver powerful results
        </span>
      </>,
      <>
        <span>
          Before you submit your application, take a moment to watch the short
          video above.
        </span>
        It features real businesses, just like yours, who saw amazing results by
        letting Sociomatic handle their Software Development. Their success
        stories can be your inspiration!
      </>,
      <>
        Watch the video, and then fill out that application with a surge of
        confidence! Sociomatic is designed for YOU, and we&apos;re here to help
        you succeed.
      </>,
      <>
        <span>Onwards and Upwards!</span>
      </>,
      <>
        P.S. We&apos;re not just saying that! Check out our stellar client
        <span>testimonials</span> - you won&apos;t be disappointed!
      </>,
      <>Sincerely,</>,
      <>
        Yeatiq
        <br />
        CEO | Top Rated Seller
      </>,
    ],
  },
  wordpress: {
    id: 7,
    title: (
      <>
        Hey there! First off, a huge
        <span>thanks on considering Sociomatic</span>
        for your Wordpress Development Management Needs
      </>
    ),
    paragraphs: [
      <>
        Now you&apos;re on the application page... (we can all take a deep
        breath together here) ... and maybe a few questions are swirling in your
        mind:
        <span>
          Is Sociomatic the right fit for me? Can my business truly achieve
          success with Wordpress Development?
        </span>
      </>,
      <>
        <span>Believe us, you&apos;re not alone.</span> Many who&apos;ve joined
        our <span>Wordpress Development management service</span> (and seen
        amazing results) felt the exact same way. It&apos;s totally normal to
        have doubts.
      </>,
      <>
        <span>But here&apos;s the thing: </span> Sociomatic is built to take the
        reins of your Wordpress Development campaigns, allowing you to focus on
        what you do best - running your business. Our team of
        <span>
          Wordpress Development experts will handle the strategy, optimization,
          and campaign management, ensuring your ads reach the right audience
          and deliver powerful results
        </span>
      </>,
      <>
        <span>
          Before you submit your application, take a moment to watch the short
          video above.
        </span>
        It features real businesses, just like yours, who saw amazing results by
        letting Sociomatic handle their Wordpress Development. Their success
        stories can be your inspiration!
      </>,
      <>
        Watch the video, and then fill out that application with a surge of
        confidence! Sociomatic is designed for YOU, and we&apos;re here to help
        you succeed.
      </>,
      <>
        <span>Onwards and Upwards!</span>
      </>,
      <>
        P.S. We&apos;re not just saying that! Check out our stellar client
        <span>testimonials</span> - you won&apos;t be disappointed!
      </>,
      <>Sincerely,</>,
      <>
        Yeatiq
        <br />
        CEO | Top Rated Seller
      </>,
    ],
  },
  shopify: {
    id: 8,
    title: (
      <>
        Hey there! First off, a huge
        <span>thanks on considering Sociomatic</span>
        for your Shopify Development Management Needs
      </>
    ),
    paragraphs: [
      <>
        Now you&apos;re on the application page... (we can all take a deep
        breath together here) ... and maybe a few questions are swirling in your
        mind:
        <span>
          Is Sociomatic the right fit for me? Can my business truly achieve
          success with Shopify Development?
        </span>
      </>,
      <>
        <span>Believe us, you&apos;re not alone.</span> Many who&apos;ve joined
        our <span>Shopify Development management service</span> (and seen
        amazing results) felt the exact same way. It&apos;s totally normal to
        have doubts.
      </>,
      <>
        <span>But here&apos;s the thing: </span> Sociomatic is built to take the
        reins of your Shopify Development campaigns, allowing you to focus on
        what you do best - running your business. Our team of
        <span>
          Shopify Development experts will handle the strategy, optimization,
          and campaign management, ensuring your ads reach the right audience
          and deliver powerful results
        </span>
      </>,
      <>
        <span>
          Before you submit your application, take a moment to watch the short
          video above.
        </span>
        It features real businesses, just like yours, who saw amazing results by
        letting Sociomatic handle their Shopify Development. Their success
        stories can be your inspiration!
      </>,
      <>
        Watch the video, and then fill out that application with a surge of
        confidence! Sociomatic is designed for YOU, and we&apos;re here to help
        you succeed.
      </>,
      <>
        <span>Onwards and Upwards!</span>
      </>,
      <>
        P.S. We&apos;re not just saying that! Check out our stellar client
        <span>testimonials</span> - you won&apos;t be disappointed!
      </>,
      <>Sincerely,</>,
      <>
        Yeatiq
        <br />
        CEO | Top Rated Seller
      </>,
    ],
  },
};
