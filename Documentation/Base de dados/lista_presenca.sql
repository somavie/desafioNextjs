/*
 Navicat Premium Dump SQL

 Source Server         : bruno
 Source Server Type    : MySQL
 Source Server Version : 80038 (8.0.38)
 Source Host           : localhost:3306
 Source Schema         : lista_presenca

 Target Server Type    : MySQL
 Target Server Version : 80038 (8.0.38)
 File Encoding         : 65001

 Date: 27/08/2024 05:27:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for participantes
-- ----------------------------
DROP TABLE IF EXISTS `participantes`;
CREATE TABLE `participantes`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `present` tinyint(1) NULL DEFAULT 0,
  `data_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of participantes
-- ----------------------------
INSERT INTO `participantes` VALUES (1, 'Bruno', 0, '2024-08-27 02:04:37');
INSERT INTO `participantes` VALUES (2, 'poii', 1, '2024-08-27 05:04:29');
INSERT INTO `participantes` VALUES (3, 'szf', 0, '2024-08-27 05:10:33');
INSERT INTO `participantes` VALUES (4, 'cvhnj', 0, '2024-08-27 05:10:39');
INSERT INTO `participantes` VALUES (5, 'nj', 0, '2024-08-27 05:14:00');

SET FOREIGN_KEY_CHECKS = 1;
