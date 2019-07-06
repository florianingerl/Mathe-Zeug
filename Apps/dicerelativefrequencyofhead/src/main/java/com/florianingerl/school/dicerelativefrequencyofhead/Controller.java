package com.florianingerl.school.dicerelativefrequencyofhead;

import java.util.Random;

import javafx.animation.KeyFrame;
import javafx.animation.Timeline;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.fxml.FXML;
import javafx.scene.chart.LineChart;
import javafx.scene.chart.NumberAxis;
import javafx.scene.chart.XYChart;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.Pane;
import javafx.util.Duration;

public class Controller {

	@FXML
	private TextField firstNameField;
	@FXML
	private TextField lastNameField;
	@FXML
	private Label messageLabel;
	@FXML
	private Pane pane;

	private XYChart.Series series;
	private int n = 100;

	private double a = 0.0;
	private int i = 1;

	@FXML
	public void initialize() {

		final NumberAxis xAxis = new NumberAxis("n", 0, n, 10);
		final NumberAxis yAxis = new NumberAxis("H_n", 0, 1, 0.1);

		// creating the chart
		final LineChart<Number, Number> lineChart = new LineChart<Number, Number>(xAxis, yAxis);

		lineChart.setTitle("Throwing a dice: Relative frequency of head");
		series = new XYChart.Series();
		series.setName("Relative frequency of head");

		lineChart.getData().add(series);

		pane.getChildren().add(lineChart);
	}

	public void startAnimation() {
		final Random random = new Random();

		Timeline timeline = new Timeline(new KeyFrame(Duration.millis(100), ae -> {
			a += random.nextInt(2);
			series.getData().add(new XYChart.Data(i, a / i));
			++i;
		}));
		timeline.setCycleCount(n);
		timeline.play();

	}

}
