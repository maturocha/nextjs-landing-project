const data = [{
    "puntos": 316,
    "logo": "https://s3-alpha-sig.figma.com/img/912f/793d/5e9646555a739788a7da5bdd78f8898d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vb-kawnx~OBNfcpHNB8nxJaVbEaFu0~DF1K4BZJC~LqIhJ9HcK1K~UJ1L7XmzE0r8QZlhp1iUuYtc7Cqx0Svm4WMFnqOkOtlQdmpAEy2ZAXaTPdrBIbgMt3tt4e2arnNMM0oRY3Qnnt~SxfX0XE~ntBHgRUPt0U~x4gyFJjdRsxSazFSj-Ue6npEmGVPlVIuD5v5h-uYWe-6EqirftxiWE2bRvglz3cR55UOmVs6qu4GX6Y4tlEwX6bzmmHgco7XHrpkO7iANIFMshwcZOx85VSmaGeD5WTvdY8t0qFn1sbcVratopDgIiaibV-LhGcJCUF3QwE-eoYQOjoGn~mg4Q__",
    "nombre": "Craighouse College",
    "juegos": ["Valorant", "Counter Strike"]
}, {
    "puntos": 300,
    "logo": "https://s3-alpha-sig.figma.com/img/1b4f/df36/5321f52f0f7223570d645858dbac2d44?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fmTkV2VYXsEOm12CSuJ4~~9q4Vn1-DxCDXZ6M-4AnlzqDCOOx-3ltDah4FCLO0ec6nlBeThzkfxrLBjH-Qj5kC61lpkGzMZgzgb61xYPlwDDjhpI451uSh~vvHpQze7ANp3idDfYQHPsk5o6c-TNNIo~r0x3iIC1VHHhBQlCzPYCDjIGpm9xmgq7w-YF6PjBUoFNr6XzobvWwubgL~h5mUNGCVEuL3UUJXTMb89oqOMJ7CsWur1MK4wz53LW~yhqgDwCp0X-L5qbihDEaQ3btrQT3athdH9rWuyWKhhp3EgOI~~BjfnvuclU9zmCaOlIAMBAkEQW~oCHvshumx8~yw__",
    "nombre": "Colegio San Pedro",
    "juegos": ["Valorant", "Counter Strike"]
},{
    "puntos": 290,
    "logo": "https://s3-alpha-sig.figma.com/img/475b/51f5/4d1caa2afc619994b985b7bd1a5c23f0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TrNv2iHf5HgVvErxMqtF6lNcj4jv1dSJlK~WbGggIJpmg4y3VU2TZDXKkfRsxLT5xCcnWd~5LtSxjmkQjAoqAbjeF10~MlA9ul52EW4jrvtM14mBJB3JyrkW4hB~rJQSkCgdSwuX-Wxu0UmTwnbB4gTDWqkeLB~qbc9tNkKht-mvl69nG51OFzPO8X7a3dS4n79J8YTp7UgVYg6auypSKcXik~3cGUA8lBiHZLEVF1SywbUEqqJA4h3tOb3~6hQKGrJ6FMLGSa0WN5gnWhSJLYxrbcw7kviOP0peFEjbgLsHDSk~xcfq85tR6vRyQ5QEFzgD2-8Q4G78dvDHUxgOuQ__",
    "nombre": "Colegio San Carlos",
    "juegos": ["Valorant", "Counter Strike"]
},{
    "puntos": 270,
    "logo": "https://s3-alpha-sig.figma.com/img/44f6/5169/99f2b6783403672463f227d419616b08?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iBuA60fiunRDh3c1BvUWgdDc3br9nT1BOdTZpUgp8xy6i8Kh9l1QNc0sxA71nPrzNiQXRwiDAqpv9SsTjmD74qZ7tyfuKLBKZuDtUQgwkjWu4pAUYmnP2-X9aCK~Rj8yCXQuTb1rdbvWQ~qUz4cNi4EPxKzlcpYURIm5Xny02CJO8ercJ6pJK-g3VvpBf283GxZtbMUmG~8OnsZQP6kNPHLDm2twQxjgJXMGEzRQvlRwPVU9dOe5coKtK8FoDBF80vLQfR-oGhra4-R~yhZUVrGIb-iZd~J5xJhmYccZqVSbU8x3fDbAG60TAkiynnPn80HGZVMr4veOg2WaAb2PrA__",
    "nombre": "Colegio San Carlos",
    "juegos": ["Valorant", "Counter Strike"]
},{
    "puntos": 255,
    "logo": "https://s3-alpha-sig.figma.com/img/a268/be7e/2fde7533711cedeb735284ca0edfc923?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A5ACAF8kPzPdRwEQDRvjQFdhhtKxW-EZLEUI5ZVM7xo7siYvouhDmUCKNFovo-u9W~VY0tkmrovIy4xpgUychJDOWbbq6mqCpl~7Naan3is4w2piQWWrpm8SHIlQ6UUS4h2KJRTtXlX3TkrdkK-Klu1VQZW2cE2Q5P6gLIy12F1MMqkVFsSzTA1FBetNGoy1ezglR5XRuBBpn5pvR~tFCRnMTd1hsqyThHq3OBYuo0Am~uDGOwd0k9Iqmss3BFwbmAjSIQR7S5510-zOFMCvD~11kyazRLoAvDnhazMcgdBk0XGeLrE7TbgPwiCLfKlkVLQxjVElZs35vDtSpjaSmw__",
    "nombre": "Santiago College",
    "juegos": ["Valorant", "Counter Strike"]
}]

export default data ;