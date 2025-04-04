export const CalDotComProvider = () => {
    return (
        <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: `
            (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
            Cal("init", "unlock-real-growth-your-90-day-ad-challenge", {origin:"https://cal.com"});
  
              
            // Important: Please add the following attributes to the element that should trigger the calendar to open upon clicking.
            // data-cal-link="yeatiq-ceo-of-the-sociomatic/unlock-real-growth-your-90-day-ad-challenge"
            // data-cal-namespace="unlock-real-growth-your-90-day-ad-challenge"
            // data-cal-config='{"layout":"month_view"}'
  
            Cal.ns["unlock-real-growth-your-90-day-ad-challenge"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
            `}}>
          </script>
    )
}