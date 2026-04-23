<template>
<p class="bg-success"> About us page is here </p>

</template>

<script setup>
const siteUrl = useRequestURL().origin;

useSeoMeta({
	title: 'About Us',
	description: 'Learn about WhatCompanyStack — our mission to document the tech stacks that power the web.',
	ogTitle: 'About WhatCompanyStack',
	ogDescription: 'Documenting the tech stacks that power the web.',
	ogImage: `${siteUrl}/whatcompanystack_logo.jpg`,
	ogImageAlt: 'What Company Stack',
	ogUrl: `${siteUrl}/AboutUs`,
	twitterImage: `${siteUrl}/whatcompanystack_logo.jpg`,
});
</script>
