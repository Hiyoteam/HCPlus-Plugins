run.replay = async (...args) => {
		pushMessage({
			nick: '*',
			text: `Createing HCReplay URL...`
		})
		try {
			const content = [...document.querySelectorAll(".message")].map((msg)=>{
				return msg.querySelector("p")
			}).filter((msg)=>{return msg}).map((msg)=>{
				return msg.getAttribute('data-raw')
			}).join("\n");

			const blob = new Blob([content], { type: 'text/plain' });
			const file = new File([blob], "ilove4n0n4me.txt", { type: 'text/plain' });
			const formData = new FormData();
			formData.append('reqtype', 'fileupload');
			formData.append('userhash', '');
			formData.append('fileToUpload', file);
			const response = await camoFetch('https://catbox.moe/user/api.php', {
				method: 'POST',
				body: formData
			});
			const box_url = await response.text();
			const replay_url = `https://cmd1152.github.io/hchistory/?t=0&u=${box_url.replace("https://files.catbox.moe/","cb/")}`
			if (!box_url.startsWith("http")) {
				throw "Failed to Update File"
			}
			pushMessage({
				nick: '*',
				text: replay_url
			})
		} catch (err) {
			pushMessage({
				nick: '!',
				text: `Failed to create HCReplay URL: ${err.message||err}`
			})
		}
	}