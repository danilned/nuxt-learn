<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <th v-for="header in fields" :key="header">{{ header }}</th>
      </thead>
      <tbody>
        <tr v-for="item in arr" :key="item.id">
          <td v-for="field in fields" :key="`${item.id}-${field}`">
            <slot
              v-if="$scopedSlots.link"
              :id="item.id"
              :text="item[field]"
              name="link"
            />
            <p v-else>{{ item[field] }}</p>
          </td>
        </tr>
        <div class="align" />
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    arr: {
      type: Array,
      required: true,
    },
    fields: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" src="@/styles/common/table.scss" scoped></style>
