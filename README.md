Wanted to start by saying that I couldn't do it on the same day it was assigned as I ran into some last second
chores I had to take care of.

I'm using React along with the following libraries
- axios
- styled-components (removed as I ended up usig a material-ui DataGrid table, however I have left the code so it can be
                    read for "revision" purposes when you check the code)
- material-ui (for the DataGrid)

Due to time constraints I couldn't give as much time as I would have liked to make the code and file structure clean. So I 
apologize in advance for that.

As for the code itself, I decided to start by making an axios request in order to get the data. I also set as condition
to always check the length of my "events" state so useEffect gets triggered every time page loads. I was having an issue where
it was not correctly loading the data upon refreshing the page and this fixed that issue. On the commented code you can see I was
planning to code the whole grid by myself but I realized I was running out of time by doing so so I decided to go for a material-ui
DataGrid which offers pagination as well as plenty of other nice options.

material-ui grids could have provided me with more power and control over deleting/addings rows but I wasn't able to dig enough 
to implement those options. 

I was planning on adding a function that was going to redo a request to the server using the next_page_token token on clicking on 
one of the arrows in the bottom of the page. I encountered some bugs like them not really working on click which are things
I can fix by reading the docs of the DataGrid in detail.

3h was quite the challenge but I had fun with it. I hope my test will be taken into account.