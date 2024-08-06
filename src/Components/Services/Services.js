import React from 'react'
import Footer from '../Footer/Footer';

const improvementFeatures = [
  {
    title: 'Regular tests & assignments',
    description: 'Our teachers design chapter, subject and syllabus wise tests and assignments while keeping the exam pattern in mind.',
    icon: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBCAMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBAUHAgj/xABTEAABAwMBAwcFCwUMCgMAAAABAAIDBAURIQYSMRMUQVFhcdEHFSKBsTJSVXKRkpOUobLBCDM2QmIWJFRlc3R1gqLS4fEjNDVDRFNkhLPwJSZj/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAECAwQFBv/EADQRAAICAQQBAgUBBwMFAAAAAAABAhEDBBIhMUEFEyIyUWFxIxQVM0JSgZEkNOEGQ3KCof/aAAwDAQACEQMRAD8A7KshQIAgCAIAgCAIC3FIZHSgjG4/d+wH8Vgw5d7kn4dFpRqvwXM41Wd8csqUaWuAc05B4KsZKStBprgqrAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgKoC1Mx7mAxOw9py3PT2FYc0Jy+KD5RaDiuJFqprY4NDq8D3A6Fp6r1LFp+HzIy49POf4MRtzcC4inABOuvFcz99STbWM2XpPqzIZWRVLTEHGJ7hjVb2H1LDql7d7W/qYJ6eeN2ZbWhgDWj0Rp3LqwioxpGu232VViAgCAIAgCAqATwGUAwRxGEAQFMA4B6TjRCCM3ba5lFWSUsFMZ3xHD3b26AekDrwuhp9A8sdzlRDdCDa9jwOUopG/Fe0+1TL06a6kRuMyPaWhOj2Txn4m97FheiyrrkbkZEd9tj9OdMaf29FjenzLwTuRmR1dNKMx1ETu5wWKUJx7RNougg8HNPccqpJVAEAQBAEAQBAEAQBAEB4lLw3LGh3WCcLFklOKuCstFJ+THrqvkKR026WuHAHiFpa3Wezp99U2Z8OFZMlEbZVGV+893Erxzm5u32dd40lSNrSyM3NeC3ME4JUzXnEtVYjacg68dFh1KSluiWh1TNlQ1bpqYkNL5GndIB+0r0vp2tln091ckc7Ph2zMuPlC3MgAPYupj3V8SpmCSSfDPSyFQgBQGqv1dNTchTUe5zqqduMLjjdHvvUsOWbVJG1psUZXKXSLVHVXGnvLKC4ujmFQ3ejez0N3Gc6dOdFVTlGe2XkvPFinh341VEi3g0aLIahadI3OCrIFMBwwHYU2RR5HHAOcJ2DktVLy1VPN0STPePW4r1OJVjivsYZGdbxbubudXRVu9nSWEZb4LBmeZT+Br+5CryZAgszziC7yxnqmi4fIsfualfNBP8AAqJj3BgowzkLhHVtfnJjB0x1grLhk8jqUdo6MXl9cFrDjp3Qs21FS8yrkb7iR8Z6Cx5CxvDB9omySbG3erqquooat/KtjYHse7iOwlc3XaeGNKcS8ZWSxc0yBAEAQBAEAQBAEAQBAaraNhfQnHWvP+vJvHE6GgpTZEaeRzSAeheWTpnYkrRnsq8NwsimYnAo+rzxKiU7Gw3Gz88beWMksbAQMb7wPavQf9PJ3kOd6hSo3HO6b+EwfSt8V6Y5o53TfwmD6VvigBq6b+E0/wBK3xUWCKXq5VdbXmghlghZHJvCcS8R0f5LbxxhCG+XJUwLg6pgqm84qWVplc10ckUoGHjQdPo8fZqq5MWPUQ4+HaZsOaWFtpX9iRUFJS0VRz2uujKupEYaHyPbhmp1b0jitCGOnuuzYy6ndHbGNKzYSXOnJOKiHu5Ruiyo1X2Ys9zgAzziL1SDxUkHmG6wEb3OItNNZB4oCpusAiqpBPEd2FzsCQcQNFfHHdNIhnM87sUYOhDBnvXqkueDDIkdnfXMoYhQ3yhhDhvc3mkxunq1C5mf23NueKX5RdX9TYH90Lx6dFbq8dJYWHPyYWD/AEyfDlEfEY8zJWf67snjrMAcD9mVkTX8mb/JH5RhvksWSKihuFG4/t5x6nLMv2nxKLI+H6GNXMtkcLX0NVUyvJ9xKwDTryFlxPUOXxxSIe3wbfyeM3qi5VHxGe0/itT1R/JEtjJuuSZAgCAIAgCAIAgCAIDzKJCAIiwHreMrFk9xr4HRaO3yW5qR81MWPcXO68YytPV6Z5sGyTtmbFkUcm5IhNxpHUsxG7hudOzsXisuN43tZ3sWRSiYmp0CxGQyYYHHBzhWXBjlKkcz8pd4ko9qIYOSgqIYaYf6OXewd4/skHo4r1no2L/Sbk6tnI1kv1SJVt6Erw6hpnUzf1o3yco3PYcA/KSuxBzS+J39zTlT6RjedavrZ81X3MiioutVnVzR3NTcxRMaC40+0Flp6a43KGG4mQtiLW5I6st6u5bsZLLDbJ0yr4dlw1FJsxbq8x3Cnq7mN0OjI3QNdBu516cqy24INp2yOyFvvFVJI945Ib53sNZoM9S0XNsvRTztUj3TmD+qFG5iinneo9/H62puYoed6n38XyJuYouU19ngqIpTybwx4du44gHUK+PK4TUvoQ4po6JR3mC4UzJ4XHccMYI1GOhepw5Y5Y74mvK0+S+2dh/Wb61lIsvMkAPovAI6QcKHFPtCzNp7tWw4ENfURge9mdj7FhlpsU+4ospM2MW1F4jGBWOf0Yexjs/KsEtBgfihuZraicvfJK7G88lxwMDVbWOCjFJFWTLyas/+IqJv+ZOfsAC4vqcv1kvsZcZLeK5xcIAgCAIAgCAIAgCAuRsyQVVslIuPcGNJccADJKo3Stlqvg1NdSx3KmL3M3XO9z2joXK1ejjq8XuRVPx+Daw5nhnRDJYHU9Q6J4wWnivJOEoy2tHajJSjZSW501O305N4j9Vpyf8ABbWH0/U5uYxMGTPCHk2mx9Pb66Gpuxo4udzSGPlpWh53G8Gg9C9jodN+z4Vj7o4+fIpzbRJWsiY7VkO7ro2ED8FuUYLKudTDjFH9EPBNpNll8tGOMUXdyQ8FZQ+hFmPJ5tkOXU8B74R4KVBoiygNsGnNqf6AH8EcGxuNbtBZrFe7bLR1dLThrmktkZAA+M++aQMgqNjJUjj3kQ2eob5tVObpCyojoYOVbE8ZY9+9gEjpwsJY+g/NNpjBLrfQMA66dgHsQHvzVawARb6Ig9Igb4KQY1dabe6lfuW2j3uj97t8EIIRtPYxMYn26jY0AbskcbGtB6jjh1rren6qGJOM3SMeSLZWz7N0dMDLW08c8xH5t7Q5jfUeKrqtbPJ8MOiIw+pFfKvbYrfa4Lpas0UrZRE5lOd1jgeGWjTK0vfyx6kzJUX4IxsNWVVzvNspaupfJDUVbY36AHBIHHHHUrPDX6iK7/8AhV40dmm2CoSP3vW1cfVvbrh7As0fU8q7SZT20Ycnk/mc8NF2HJ9JMGvtWX96OuY8j2yW2a2U9mt8VDS7xjZrvO4uPSSublyyyzcpF0q4M1YyQgCAIAgCAIAgHcgL8LA0ZPEqjZKEku6lEmLLO17S12oOhCSipKmLrosvnGOOOoKY0uECD7cUdXUYnpC5wA9KNrMkducrH7MLvarLrJKqs5rV3ako271RLva6DOcnuCu/wQ2de8l7mT7LUNQI2gz5kdpjOSreCt8kjrZ52zSCN5G6fRAGh0Bx3nKKq5BWqlNOybFTNvMbnJaC0HGcZwoXILN9aeUh3A3fIOpWTC1zZEjVGmqeuDPxis/uRKUem08+Dvui9Tio9xCi24Y3u4q18EeTmH5OP6RXb+ZD760TKujpflMnpPMzIp+b1EjX74oppd0TDt7lZafLmXwItGcYu5Gz2Zq6Z9ipo6aWN/JtDS2N+8GHqyVLwzx0poiUlJ2jX1kUz6mY80vBBkdrHOA068QOgLdxtbVyv8GNnilY+mm5Vttu0pxjdlla4JOpKrX+AZYq5Rws1XjtDfFYvbj/AFoWQvy0HlNhY5XUz4HGsjyx+MjisORVxdlkc68mem0Vm/pCP2hVXQ8n0wOCkgIAgCAIAgCAIAgCAIAgEsxjYq1ySjWVVbrqVIMfneVAKOqNEBrqufRyA+dLzpTQ/H/AqZEo+hvJO8N2Is5ccARKabiR5JVPEXTveypj5NxBMbs8cY6FC/BJ5LCKd8AqKdrHgg4Bzrx6U89AsXedj5YuTcHboOcHuWTHF07KtmGag5zuu+eVdQIs8vncRplv9YlWUERZYectOudFLIs5f+Th/t+6/wAyb/5FpGY6ftVsTFfK0VrKoxT7ga4OGWkDguhpNf8As8dlcGOULMjZnZiOwNkImMsr8ZONBjs9arqtW9Q+iYx2l+Wx0r5XyGWqy9xccVDgNeoLFHM0qJo8Gx0g/wB7V/WXK3vy+xFAWSmY4HlarQg4dUOT35VXH+BRD/LkM7C91XF+K15Fkcx8mZxtHZh/GEftChdBn00xpd0FS2VSL2AxvAKvLLFoyMccaAqVwRRQ46x8qsQUQBAEAQBAEAQA8EB5kY2Ru6/UIDAfZ4HyFz5Zd33oPFRQstSWRgOYKh7OxwylE2U8zy41qR8z/FKFnibZ9jhvGocXAdQwlCz5gupJposkH0uPqUyJPoTyUgP2Ks7XcDEFP8pHknRp4caxtPqWO2TRqL7cbfaYwHwxyTnBbHu8QTjOflVZ5HFWZ9Pg97IoIWi4Wm5tDY442TdMbwM+rrVYZ93kvn0eTA+Vx9TacxpD/wAPH81Zd8jVpDmFJp+94/mqN8hSNDdYmQ1b2Rtw3GcLZg7jZSS5OS/k4/pBdR/0TfvhahkJvU3CV8lzfNd6qKWORwihEmNAeAGV1VGcZ4oxxXFrlkbU4t2Sykllms9BK95MjuT3jnidM5WnNKOWSXRCNfdqxkdfI01scZGPRddWwkaD9TBwqLoGEa9pOBcoBkfDbf7qkkyY76yGFrTNbn7um8+6tLj/AGUogj3lmdzjyfvl9H8/E/0Xbw6eB6VEgcs8mn6SWX+kI/vBVXRJ9NS1Qhjx04UUDXPuG+OJCAw5q8tkAB0KEF2OtdJURRM4l4OnRqpBuVJAQBAEAQBAEAQBAEAQBAeZPzb/AIpQI+Rric0sXf8Agqvosj6F8k36H2b+SV/5CPJ0EcViLHP/ACgOIvMLejm7PvPWHP8AIdD03+Ov7kfhkcxwDCQesLR5R6KUU1yuCWbN7QVklVFRVLeXa44DwPSYO3sW1hyy6fJxtdo8UYPJB0TMLaOMR29/66/4o9i2cPyGOXZyD8nL9ILr/Mm/fC1TIdZrbtsy2omFVFTySxuxI91GXa9rg1b0MGpaW3z1yVbj5NyH081PBIzdMTt1zCBp2cFqu4tqXZJjVNyt9PO6Kepijlb7przqOro6sKVYLJvFqP8AxlOe3KlWQZEb4Z4RNCWyRu9y5o0IUghflkZvbBVg6GyMPdqqsk5H5NT/APZrKP4wi+8FXwD6XnpoakATs3gO3GFNFbMc2ujJJEJaetryEoWUdaKE4Lo3ud1l58UoWX6ejp6bJgi3Xni5xypBkICiAIAgCAIAgCAIAgCAICj/AM24/sn2Iwj5CrtaWLv/AAVWXPofyT/ojZP5NX/kKvs6DkcM9Cwljn+37XG+0+60k82boB+09Uyq4Uje9PnGGZOTpFm17OT1JD6rMMZOd0D0z4LXhgb7OhqPUoR4x9k3tVvioINyKER9vFx7ytpJR4RxcuWeWW6TM8aKTGRy+6VknxB7FtYfkMcuzkP5Oef3QXQ/9E374WqjIdFns97idcIaemgliqJHOD3PaCMnqK37wTnjyNtOIUmouNEmo6aSnttJA8AyRNYHY7OOq1c0lObkvJSixXU9c+qe6n5xyZxjcqmsHDqwVBcxXUt066v683+6pQLTqS4gcKnXo543+6psqaHytNcPJ3WtOS4cmDk5PFRII5D5ODjamxj+MI/vBVXRJ9PKxUIAgCAIAgCAIAgCAIAgCAIDXXuaWKCJ8L3M9LBwub6lkyY4KUHRuaOMZyakjUtuFX/CHrjftmf+o6T0uH+k1l3q6pjWvFTKN4Hew/itvS6jPkfxPgtHDjppI+eq52YmDjh3T3LuJcHDapnf/Jk6SHY61CeN8TmR6dZHQtPL6lHHLZVmaGlc1uJW2YtnlqYnYkkDWvycnA4aLa0uXHnVox5YSgy1UvnmmbMXNDwN0OLQSB/6Vt+3ExWy5HVzRjDX8OsKNiItno3GfGeWwfUp9uItnh10qG/75vyhT7cRbNJtBeaa3W+prrhUtDWsJ90MuONAO1W4iiFbOYeQCtp6TaqogqJAx9VSbsWTjJBBwtNGQ+hS09RVkQU3XdRQAtPUUB4fhrcuOB1nRLSVslcmDLX0kYe58zWsZqXu0b8vSojkT4RLg0rIf5Si+7bE1tNbYX1D5HMAwAwYzknLiNFlcJPhdlPucg2BgkpdsLLFM3dc24xNPUDkHGevCpKLg6ZbtWfTuRkjOvSFJQIAgCAIAgCAIAgCAIAgCAqgMS5QGeikYBlw1AWprcPvYXFGxpsnt5E/BpLhCKdtNGAA8R5d3k/5rhavEsUYQ80dPTzc3J/c0N8aBG2Vvut0tHUFTT5nH4TYk2otI5DsXYjtJeqalzvU0JElQ4a6Do9a72oz+zjvycXHi3zPoD/R00Aa0BkcbNGj2Lzkm27Z0lHwjj/lV2hlfVR22jqjE9p5WdzJS0g9DdOxdf0vE1F5H5NXWTTaiiAc/r+m6T/WneK6tmjQ5/XHjc5j/wB07xS2KPJrKw8bjL66l3iliinOqs8bhJ9Zd4pYotyPmmwJqrlAOG/KXY+VLFCMuie2SOZrHt1DmvwQUsUbJu0V8aAGXypA6ucFRYo9fulv/wAPVP1hLFD90l+Oc32pI4nE6m2SdxhLbFSMZTB9Q95AMtTK6Q695XPx53PMoy8m68KjjckYtVtE+iifUTUUFVM0ZEkpJx3DgF6SOki3UXSOU8r7Lk1GysAq9oqyap4FlNANyMdmFzP3h+r7WJbfF+TcWlqO+XJebWWeCnBqM0UEbt4RU0eXE9GX8c92FsrRz3X2zC80a4NDcdspvSgskRpIDxkJzI7tJK6WLRRiryGtLLfRPthqku2aoDVz5nmLscofScc9vFc3UuPvOujNCMtvRIlhJCAIAgCAIAgCAIAgCAYzoUBgXuvfbaI1EcQkdvBoydB3rHkltVmzpsCzZNrdEaZcvOUkksjQ2XpA4YXnNdGUp730dpYVhW1GHeS0Qx75GN7XVa+BNy4Imm4tI37KakgnkdR00MLT6I5KMN3gO5bWt1Dyz46RpYcexfcwLrPvYiHe7wWvgwvNkUDYc1jg5HixWyhmrJXTUVPIXMyXSQtJJz2r10IRitqRw8k3J7mbs2a1fBtF9XZ4K21GO2PM1q+DaL6uzwTahbKeZrX8G0X1dngp2oWynma1fBtF9XZ4JSFseZ7V8G0X1dnglIWyhs1r+DaL6uzwSkRuY8zWv4Novq7PBNqG5jzPa/g2i+rs8E2olNlHWa1kf7MoiOrkG+CbUE3ZGL+N1ugAAkHDvXAw8aqP5O1L+A/wRq/EGhl+KV7bH2efZI6k71up3dbGn7F42P8AvF+Tvf8AZf4I9eyDSSDoxnK9nj+Y4DKWSK20NA251UMlXK5uYYiAIx2u1yfkXG1nqE5twXCO1pPTrqTfJmbOV1TcNrKCapfk8rgNGjWjB0AXNhOUsibZ1NRijj08lA62t882EAQBAEAQBAEAQBAEAQFqtp46umkp5Rlj24z1dqrKO5UzJCbxzU0c7qop7ZXOido+M/KPArmZcaa2yR6fHlWaCaMuKBt3qoHObiKAlz29DndAXMlD2LXZin+kmjfTzCGIu97oFrNmtFbmRrzlRmdwqJiHA64YT7Au36aoYouUu2U1Omz5flXBtaO/WinORO4aY/NP8F0/2qBpv0vUNf8AKJJSyNq6WKogO9HI0OaeGQsqmpKzSnjljk4y7Rd5J/V9qtuRjpnl0b2gkjQJaFMxOexA8JPo3eCmitlOexHok+jd4KaFlOeRdUn0bvBKZFlRVxk8JPo3eCjoWjLELyAcce1RaLUxyMmRp9qbkTTINtFlrZQeLJNflXn4utUvydp/wH+CMXj0qKXuK9vA88zfMeX2Skf/APi32Lxr41q/J31/Af4NFeDmlf1dK9nj75ODLosULt/ZekJ97j7SvL6lVlkes0TuEX9jN2XIj2gt5H/OA+xYcfzGfV84JnZF0jypRAEAQBAEAQBAEAQBACUBqrltBQ0LiwkzSDi1vQsUs0Ym5h0OTLz0RG7XGS71bJORDCButDeJ10yVpZct/EztabAtPj5dm9oKVtJTNYMbx1ce1cTLPfKzXnLdKzX3qrx6LT2DvU4MfuSM2GFkdNPGTo37V1zcuuirYI+gJRLl9TpNip3Ulno4JBhzYxvDqJJOPtXSxqopHltXNTzykjOVzXHrxohBhag4ydFlRh8j5UAz3oBxOMlAZvsWIzLor+CeQc82o0dWjqkd7VwbrUr8nZXOD+xFLi7ep5AOkL3cTzrN1QP3tnaQnhyDfYvGZeNd/wCx34c6f+xpLk7NNID1L2cVycBlizvDtnIx7x7x/aK81rVWeSPVenO8MWZdmfyd3ondU7fatSHzI3NRG8Ul9jtZ4rpnkyiAIAgCAIAgCAIAgB4aICzPyj4nsad0uaQCOhRJWqLQaUk2Q5+y9eCd18bu08StR6eVnaj6nipLaKOlitFe11zDi5zMxljcgdZKj24Y+MhGXPPUxrCujeyclPTulpntdkaEHpWvqPT4TW7GaePPOEqmiNVFtr5X7xi9Ho1+1NPop448nRhrsCVFrzPV/rMAC2VpZsrL1TEujNoKM0crZXQGSRvAkaD1LZx6aMeWzQ1HqOTItq6NwLrW8DF68LY2o598AXWs6Y/sTYiLLkd0nLgJWODenAyo2pCy7z6EcGS/NUkUOfxDgyT5qEUVFwi6WSfNSiKK8/hP6knzUoUU84yHg0gDhkKNpkHnKQAgjQptBDto5OUdWu6Dk/KvO5FWq/udnHzgv7EQqH5jk7tF7yPSPO+Td2h29s3SDqgC8VqeNe//ACO/i/2y/Bpax+9E8dhXtYqmcB9mLs3Jv2iZnQ2d4/H8V5z1BVmPTemP9BfZmZRPxW0x6RMw/wBoLQj2jp5PklZ3IHIBXUPIPsIAgCAIAgCAIAgCAIAgHrQGl2ntE10gifRyiOqhOWb3Bw6j1d6w5sKyI3NHqlp20+mauy2O709YJ6qSKNmMPiY4uEnfoFXBilD5mZ9dqsOZfCuSUASn3Qj9S2TmFwRt6WjPcoA5NvvQpBQxMPFoSwORj94EsWU5CI8WBLFjm8PvAlixzeH3gSxZTm8XvAlsDm8XvAlsB1NER7nBSwYlRQF+jMZx1qUx5Ind7Jci6cMpJJBIDu7muq4ufBkep3JcWdPDmgsO1vkg1ZSVlI50dXSzxO4YfGRn18F7WE4uK5OFJO6NxboZaSyxQVDeTkZFktPQF4zWc69tfU7+Br9mq/BoJJA5r+rBXtkumef8lqwwy09CXyt3Y55HGMnTeAwCV531Rfqo9J6S7xSX3JxsBYzW1ZuNQzNPTnEYI0c//Bamnhbtmb1HUuC9uPbOkrdOAEAQBAEAQBAEAQBAEAQFUBQ6aoA48BgaoCvQgKIAgCAIAgCAIAgCAIA73CEAAbgdgZzhRdEr6g+lnKmqBbfTQTRF00Mb9ODmAgqrjG7olSa4NLVbIWCqe18ltjaSdeSc6MHvDSAtmOoy12Y3FFq8bIW2qgiO/URcj6LBE5oGDjTUHqWpn/Ue6XZ0NFqJ4rUTd2yihoKCKkp2kRRNAb1957VaKUVSNTLOU5OcuzIznirFQgCAIAgCA//Z',
  },
  {
    title: 'Report card with detailed analysis',
    description: 'Students receive a detailed performance analysis with their strengths and weaknesses, as well as skill level.',
    icon: 'data:image/jpeg;base64,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',
  },
  {
    title: 'Parent-teacher meetings',
    description: 'Parents get to connect with teachers and are kept informed about their child’s strengths, behavior, learning patterns, and progress.',
    icon: 'data:image/jpeg;base64,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',
  },
];

const Services = () => {
  return (
 <div>



 














{/* header */}
  {/* Banner */}

<div className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
         
          <h1 className="  text-gray-900 text-5xl  mb-4 font-extrabold">
          SRS <span className="text-red-700">Services</span>
        </h1>
         
          <p className="mt-4 text-lg  mb-6 text-gray-600">
          "Embrace the journey of learning and personal growth at any age. Whether you're starting out or advancing your skills, continuous self-development fuels success and fulfillment. Let’s achieve greatness together! "
        </p>

          <a href="/contact" className="inline-block bg-red-700 text-white py-3 px-6 rounded-lg text-lg">
            Contact Us
          </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.pinimg.com/564x/e8/88/bf/e888bf152d869db70f72191585492876.jpg"
            alt="Digital Agency"
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
            style={{ maxWidth: '500px', maxHeight: '500px' }}
          />
        </div>
      </div>
    </div>

  

    <div className="bg-white p-10 py-12 rounded-lg shadow-lg  ">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Courses </h2>
        <div className="flex justify-center  space-x-5">
          <div className="text-center">
            <img src="https://www.vedantu.com/cdn/images/new-home-page/courses/course-4.webp" alt="NEET Crash" className="w-16 h-16 rounded-full mx-auto" />
            <p className="mt-2 text-gray-600">NEET Crash</p>
          </div>
          <div className="text-center">
            <img src="https://www.vedantu.com/cdn/images/new-home-page/courses/course-6.webp" alt="JEE" className="w-16 h-16 rounded-full mx-auto" />
            <p className="mt-2 text-gray-600">JEE</p>
          </div>
          <div className="text-center">
            <img src="https://www.vedantu.com/cdn/images/new-home-page/courses/course-5.webp" alt="NEET" className="w-16 h-16 rounded-full mx-auto" />
            <p className="mt-2 text-gray-600">ICSE</p>
          </div>
          <div className="text-center">
            <img src="https://www.vedantu.com/cdn/images/new-home-page/courses/course-3.webp" alt="JEE/NEET Foundation" className="w-16 h-16 rounded-full mx-auto" />
            <p className="mt-2 text-gray-600">MPBOARD</p>
          </div>
          <div className="text-center">
            <img src="https://www.vedantu.com/cdn/images/new-home-page/courses/course-2.webp" alt="CBSE" className="w-16 h-16 rounded-full mx-auto" />
            <p className="mt-2 text-gray-600">CBSE</p>
          </div>
          <div className="text-center">
            <img src="https://www.vedantu.com/cdn/images/new-home-page/courses/course-1.webp" alt="ICSE" className="w-16 h-16 rounded-full mx-auto" />
            <p className="mt-2 text-gray-600">Extra</p>
          </div>
          <div className="text-center">
            <img src="https://www.vedantu.com/cdn/images/new-home-page/courses/course-7.webp" alt="Olympiad" className="w-16 h-16 rounded-full mx-auto" />
            <p className="mt-2 text-gray-600">Olympiad</p>
          </div>
        </div>
      </div>

    </div>



    <div className="bg-gray-100 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Courses for <span className="text-red-500 underline decoration-yellow-500">kids</span>
          <div className="bg-red-500 text-white px-2 py-1 rounded-full inline-block mb-2">NEW</div>
        </h2>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg w-64">
      
          <h3 className="text-xl font-bold mb-2">Short Term Courses</h3>
          <p className="text-gray-600 mb-4">Class LKG - 5</p>
          <p className="text-gray-600 mb-6">Skill building short term courses</p>
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg">Explore</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-64">
          <h3 className="text-xl font-bold mb-2">Learn English</h3>
          <p className="text-gray-600 mb-4">Class LKG - 5</p>
          <p className="text-gray-600 mb-6">Level based holistic English Program</p>
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg">Explore</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-64">
          <h3 className="text-xl font-bold mb-2">Learn Math</h3>
          <p className="text-gray-600 mb-4">Class 1 and 12</p>
          <p className="text-gray-600 mb-6">Turn your child into a Math wizard</p>
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg">Explore</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-64">
          <h3 className="text-xl font-bold mb-2">Coding Classes</h3>
          <p className="text-gray-600 mb-4">Class 1 - 12</p>
          <p className="text-gray-600 mb-6">Learn to build apps and games, be future ready</p>
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg">Explore</button>
        </div>
      </div>
    </div>



    {/* <div className="flex bg-gray-100 p-8 rounded-lg"> */}
        {/* Booking Section */}
        {/* <div className="text ">
        <h3 className="text-xl font-semibold mb-4">
          Book your <span className="text-red-500">Free Demo</span> session
        </h3>
        <p className="text-lg text-gray-600 mb-6">Get a flavour of LIVE classes here at Vedantu</p>
        <button className="bg-red-500 text-white py-3 px-6 rounded-lg font-semibold">
          Book a free demo
        </button>

         
      </div> */}

      <div className="flex items-center justify-between p-4 bg-gray-100  rounded-lg shadow-lg   my-86   mx-auto my-8">
  <div className="flex-1 mr-10">
    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
      Book your <span className="text-red-500 underline decoration-yellow-400 decoration-3">Free Demo</span> session
    </h2>
    <p className="text-lg text-gray-600 mb-6">Get a free academic counselling session</p>
    <button className="bg-red-500 text-white py-3 px-6 text-lg rounded cursor-pointer hover:bg-red-700">
      Book a free demo
    </button>
  </div>
  <div className="flex-shrink-0">
    <img src="https://i.pinimg.com/236x/5a/80/81/5a808183854867469c4253d8478fac7c.jpg" alt="Demo session" className="max-w-sm rounded-lg" />
    <p className="mt-2 text-gray-600">
            SRS Improvement Promise
          </p>
  </div>
</div>

 {/* Improvement Promise Section */}
 {/* <div className="flex justify-center text-center mt-10">
        <div className="text-center">
          <img src="" alt="SRS Improvement Promise" className="w-32 mx-auto" />
          <p className="mt-2 text-gray-600">
            SRS Improvement Promise
          </p>
        </div>
      </div>
     */}
    {/* </div> */}



    <div className="  mx-auto p-4 bg-gray-100  rounded-lg shadow-lg   my-8">
    <div className="text-center mb-8">
    <h2 className="text-4xl font-extrabold text-gray-900">
    We also help you keep track of your  <span className="text-red-500">progress throughout the year</span>
    </h2>
  </div>
      <h1 className="text-3xl font-bold mb-4"></h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {improvementFeatures.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img src={feature.icon} alt={feature.title} className="w-10 h-10 mb-4 mx-auto" />
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className='mt-4 text-black'>Our promise is applicable on all our long-term courses. For more information connect with our counsellors or view our course information.</p>
        <div className="flex justify-center mt-4">
          <button className="px-6 py-2 bg-red-500 text-white rounded-lg mr-2">View course</button>
          <button className="px-6 py-2 bg-red-500 text-white rounded-lg">
           <a href="/contact">  Book a free demo</a> </button>
        </div>
      </div>
    </div>



 
 
 
  {/* gallery */}
  <section className="bg-white text-gray-700 body-font" id="gallery">
      <div className="flex justify-center text-3xl font-bold text-red-600 text-center py-10">
        Gallery
      </div>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {['https://i.pinimg.com/236x/83/6f/f5/836ff5ad204d167f5893ff43fabab5e5.jpg',
          'https://i.pinimg.com/564x/a9/13/80/a91380cd3309c29de1bc232deb138a89.jpg',
          'https://i.pinimg.com/236x/6a/c1/9b/6ac19b4f7769f0ca3a264c6b92ff3507.jpg',
          'https://i.pinimg.com/236x/8c/b6/23/8cb62342fc6067fbca1b8432a65f660d.jpg'
        ].map((src, index) => (
          <div key={index} className="group relative">
            <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-105" />
          </div>
        ))}
      </div>
      <div className="flex justify-center py-6">
        <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-red-700 transition-colors duration-300">
      
          <a href="/gallery">Explore More</a>
        </button>
      </div>
    </section>





 <Footer/>
  
  </div>

  )
}

export default Services;