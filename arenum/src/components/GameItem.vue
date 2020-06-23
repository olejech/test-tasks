<template>
  <div class="item">
    <img class="image" :src="imageCard" :alt="name" />
    <div class="item-info">
      <div class="date">{{ dateFormat }}</div>
      <img class="icon" :src="icon" alt />
      <span class="name">{{ name }}</span>
      <div class="params">
        <span class="mode">{{ gameMode }}</span>
        <span class="participate">{{ participateCount }} / {{ maxUsers }}</span>
        <span>Призовой фонд {{ prizeTotal }} руб.</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'GameItem',
  props: {
    image: {
      type: String
    },
    date: {
      type: String
    },
    paymentType: {
      type: String
    },
    name: {
      type: String
    },
    gameMode: {
      type: String
    },
    participateCount: {
      type: Number
    },
    maxUsers: {
      type: Number
    },
    prizeTable: {
      type: Array
    }
  },
  computed: {
    imageCard() {
      return this.image
        ? this.image + '?width=300&height=300'
        : 'https://via.placeholder.com/60/60'
    },
    icon() {
      return this.paymentType === 'free'
        ? '/images/free.svg'
        : '/images/ticket.svg'
    },
    prizeTotal() {
      return this.prizeTable.reduce((acc, current) => acc + current)
    },
    dateFormat() {
      return moment(this.date)
        .locale('ru')
        .format('DD MMMM YYYY, в h:mm')
        .toUpperCase()
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../assets/stylus/common/vars';

.item {
  display: flex;
  padding-top: 18px;

  &-info {
    width: 100%;
    border-bottom: 1px solid lighten($black, 15%);
    transition: $duration;
    padding-bottom: 18px;

    &:hover {
      border-bottom: 1px solid lighten($black, 50%);
      cursor: pointer;
    }
  }
}

.image {
  width: 60px;
  height: 60px;
  margin-right: 16px;
}

.date {
  margin-bottom: 2px;
  font-size: $fontSizeSm;
  line-height: $lineHeightSm;
  color: $white;
}

.name {
  font-size: $fontSizeLg;
  line-height: $lineHeightLg;
  color: $white;
  font-weight: 500;
}

.icon {
  margin-right: 6px;
}

.params {
  font-weight: 300;
}

.mode, .participate {
  position: relative;
  margin-right: 15px;

  &:after {
    content: '\2022';
    position: absolute;
    top: 0;
    right: -10px;
  }
}
</style>
