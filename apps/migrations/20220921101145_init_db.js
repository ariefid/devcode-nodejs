/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    return await Promise.all([
        knex.raw('DROP TABLE IF EXISTS `activities`'),
        knex.raw('DROP TABLE IF EXISTS `todos`'),
        knex.raw(
            "CREATE TABLE `activities` (`id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, `email` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL, `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '', `created_at` timestamp NULL DEFAULT current_timestamp(), `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (`id`) USING BTREE, INDEX `email`(`email`) USING HASH) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci",
        ),
        knex.raw(
            "CREATE TABLE `todos` (`id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, `activity_group_id` int(10) UNSIGNED NULL DEFAULT NULL, is_active tinyint(1) UNSIGNED NULL DEFAULT '1', `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL, `priority` enum('very-high','high','normal','low','very-low') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT 'very-high', PRIMARY KEY (`id`) USING BTREE, INDEX `activity_group_id`(`activity_group_id`) USING BTREE) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci",
        ),
    ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('activities').dropTable('todos');
};
