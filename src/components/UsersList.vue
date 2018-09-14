<template>
    <div class="users-list">
        <div class="user-profil">
            <img src="@/assets/group.png"/>
        </div>
        <p class="grp-txt">BDDI</p>
        <p class="grp-txt">2018/2019</p>
        <div class="action-icon">
            <div class="circle-icon search-icon">
                <img src="@/assets/search.png"/>
            </div>
            <div class="circle-icon add-icon">
                <img src="@/assets/add.png"/>
            </div>
            <div class="circle-icon more-icon">
                <img src="@/assets/more.png"/>
            </div>
        </div>
        <div class="media-container">
            <div class="media-txt">Medias<span class="media-number">(10)</span><span class="see-all">Voir tout</span></div>
            <div class="media-content">
                <div class="first-img">
                    <img src="@/assets/media1.png"/>
                </div>
                <div class="sec-img">
                    <img src="@/assets/media2.png"/>
                    <img src="@/assets/media3.png"/>
                </div>
            </div>
        </div>
        <div class="contact-container">
            <div class="contact-txt">Contact<span class="contact-number">(23)</span><span class="see-all">Voir tout</span></div>
            <div class="contact-content">
                <ul>
                    <UsersListUser v-for="(user,index) in users" :key="index" :user="user"/>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import UsersListUser from './UsersListUser';
import store from '../store';

export default {
  computed: {
    users: () => store.users,
  },
  components: {
    UsersListUser,
  },
};
</script>

<style lang="scss">
    .users-list {
        height: 90vh;
        width: 200px;
        background: white;
        .user-profil {
            height: 90px;
            width: 90px;
            border-radius: 100%;
            margin: -60px 0 0 55px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            img {
                height: 100%;
                width: auto;
            }
        }
        .grp-txt {
            text-align: center;
            font-weight: bold;
            &:nth-child(2) {
                margin-top: 20px;
            }
        }
        .action-icon {
            height: 26px;
            display: flex;
            margin-top: 22px;
            .circle-icon {
                height: 26px;
                width: 26px;
                border-radius: 50px;
                margin-left: 20px;
                cursor: pointer;
                img {
                    height: 100%;
                    width: auto;
                }
            }
            .search-icon {
                margin-left: 39px;
            }
        }
        .media-container {
            margin-top: 32px;
            height: 30vh;
           .media-txt {
               width: 100%;
               height: 31px;
               background-color: #e8b34a;
               font-size: 13px;
               font-weight: bold;
               padding: 0 15px;
               position: relative;
               display: flex;
               align-items: center;
               color: white;
               .media-number {
                   font-size: 10px;
                   margin-left: 5px;
               }
               .see-all {
                   font-size: 10px;
                   margin-left: 55px;
                   cursor: pointer;
               }
           }
            .media-content {
                .first-img {
                    display: flex;
                    justify-content: center;
                    height: 100px;
                    margin-top: 15px;
                    img {
                        height: 100%;
                        width: auto;
                    }
                }
                .sec-img {
                    display: flex;
                    justify-content: space-around;
                    height: 80px;
                    padding: 15px 7px;
                    img {
                        height: 100%;
                        width: auto;
                    }
                }
            }
        }
        .contact-container {
            height: 35vh;
            .contact-txt {
                width: 100%;
                height: 31px;
                background-color: #e8b34a;
                font-size: 13px;
                font-weight: bold;
                padding: 0 15px;
                position: relative;
                display: flex;
                align-items: center;
                color: white;
                .contact-number {
                    font-size: 10px;
                    margin-left: 5px;
                }
                .see-all {
                    font-size: 10px;
                    margin-left: 55px;
                    cursor: pointer;
                }
            }
            .contact-content {
                height: 100%;
                overflow-y: scroll;
            }
        }
    }
</style>
