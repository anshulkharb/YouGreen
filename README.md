# YouGreen - Save the planet one video at a time
You can download extnesion from [here](https://chrome.google.com/webstore/detail/yougreen-save-the-planet/kkmjnhmmeibepfpgnfpodpfjfahbmalm).


![](https://anshulkharb.com/static/side_projects/yougreen/main.jpg)

From cat videos to live game streaming, the world loves to watch videos on YouTube. YouTube has a variety of categories of videos, but music dominates them all, [almost all](https://en.wikipedia.org/wiki/List_of_most-viewed_YouTube_videos) the most-watched videos are music videos. It is a general process that we start playing our latest favorite on one tab and continue doing some other stuff a different tab. But there's one problem in this, what? In the background tab, one song ends and another starts and it goes on, still couldn't figure out the problem? Problem is that videos are running continuously in the background and they're fetching 100s of MB on full HD quality.

Now let's jump into a different story. Some days ago, I came across [this article](https://www.emergeinteractive.com/insights/detail/does-irresponsible-web-development-contribute-to-global-warming/)

> According to the American Council for an Energy-Efficient Economy it takes 5.12 kWh of electricity per gigabyte of transferred data. And according to the Department of Energy the average US power plant expends 600 grams of carbon dioxide for every kWh generated. That means that transferring 1GB of data produces 3kg of CO2.

There's one another [article](https://medium.com/stanford-magazine/carbon-and-the-cloud-d6f481b79dfe).

> The combination of transmitting your data and storing it in a data center probably requires about 3 to 7 kWh per gigabyte. That’s about a million times more than the energy you used to save to your hard drive. Instead of 0.1 microwatt-hours, your text document has sucked down 0.1 watt-hours of electrical energy — enough to light an LED bulb for about 30 seconds.

Now the carbon footprint of electricity generation varies in different countries because of different sources from which electricity is generated. For example, carbon footprint from electricity generated from coal is much higher as compared to wind or solar. For a rough calculation, let's consider the USA where on average, [1.222 lbs CO2 per kWh](http://www.carbonfund.org/how-we-calculate/) which is 0.5534 kg CO2 per kWh.

> Emissions factors for electricity by your monthly bill are based on state based figures from the EPA eGRID to get the state-by-state prices for energy, and the emissions factors are generated from the Department of Energy’s Energy Information Administration. On average, electricity sources emit 1.222 lbs CO2 per kWh. State CO2 emissions per kWh may vary greatly in accordance with the amount of clean energy in the energy supply (Vermont: 0.00668 lbs/kWh; Wyoming: 2.041lbs/kWh). (Source: (Source: EPA eGRID Summary Tables)

For calculating the amount of CO2 produced per GB of data transfer, I'm taking 3kWh(Energy required for 1 GB of data transfer, which ranges from 3-7kWh) and 1.22lbs of CO2(average amount of CO2 produced per kWh of Energy generated), resulting in around 1.5kg CO2/GB. There're no hard and fast rules for such calculation but these are estimations, and I hope these estimations are not true. Please share if you have a better source of data.


Please check out [this research paper](https://dl.acm.org/citation.cfm?doid=3290605.3300627) for more info. Also, check out [this](https://www.newscientist.com/article/2201769-a-small-youtube-design-change-could-drastically-cut-its-co2-emissions/), [this](https://www.theverge.com/2019/5/7/18531107/youtube-waste-energy-power-video-streaming-google) and [this](https://www.fastcompany.com/90346595/the-internets-youtube-habit-has-the-carbon-footprint-of-a-small-city).

Now let's check some other numbers, [according to Netflix](https://help.netflix.com/en/node/87).

> Watching TV shows or movies on Netflix uses about 1 GB of data per hour for each stream of standard definition video, and up to 3 GB per hour for each stream of HD video.

For a rough idea, a car produces around 150-200gm of CO2 per km driven. Also, you can google the Carbon footprint of any daily activity.

Now, coming back to the problem, we know that music videos are still running continuously in the background tab(since I start writing this article) while fetching 100s of MB on full HD quality, but what if there's a way in which we can still listen to the music in the same quality by restricting video quality to the lowest, which we were not watching anyway and it'll function by fetching just fraction of the data compared to former way.

So, here's the simple solution, YouGreen: saving the planet one video at a time.

![](https://anshulkharb.com/static/side_projects/yougreen/yougreen.png)

### Here's it how it works:

- Install extension.
- Now, you can set default quality by clicking extension's icon located on address bar.
- Now whenever any video that will autoplay in the background, it's video quality will automatically be downgraded to lowest.
- And when you'll come back to that tab, that was playing music in background, and play some other video manually, YouGreen will intelligently upgrade to your selected default video quality.

### For collaboration or anything else, shoot mail at hi@anshulkharb.com
